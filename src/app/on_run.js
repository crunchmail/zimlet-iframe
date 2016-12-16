/**
 * @ngdoc overview
 * @name onRun.run
 */
(function () {
    'use strict';
    // TODO review dependance injection
    var OnRun = function($rootScope, appSettings, $location, $http, jwtHelper,
                        apiUser, apiMessage, globalFunction, $log, $window,
                        gettextCatalog, $route, tokenHandler, postMessageHandler,
                        _, apiUrl, moment, zimbraHandler, $timeout) {
        function initUser() {
            apiUser.getProfile().then(function(result) {
                apiUser.setInfo(result.data);
                $rootScope.user = result.data;
                _.forOwn(result.data.groups, function(v, k) {
                    if(v === "administrators") {
                        $rootScope.isAdmin = true;
                    }else {
                        $rootScope.isAdmin = false;
                    }
                });
                /**
                 * Init Raven
                 */
                window.Raven
                .config(appSettings.raven.dsn, {
                    release: appSettings.config.release,
                    tags: {
                        git_commit: appSettings.config.tags.git_commit,
                        env: appSettings.config.tags.env
                    }
                })
                .setUserContext( {
                    email: result.data.identifier
                })
                .addPlugin(require('raven-js/dist/plugins/angular'), angular)
                .install();
                $http.get(result.data.organization).then(function(organization) {
                    /**
                     * Settings user
                     */
                    $rootScope.canAttachFile = organization.data.can_attach_files;
                    $timeout(function() {
                        $location.path("/dashboard");
                    });
                });
            });
        }
        /**
         * @ngdoc function
         * @name Init authorization
         * @description launch application with correct credentials
         * @param {String} url api url
         * @param {String} apiKey api key
         */
        function initAuth(url, apiKey) {
            apiUrl.init(url).then(function() {
                /**
                 * On promise success init user
                 */
                $log.debug("success api url init");
                initUser();
            }, function() {
                $log.warn("Token not valid");
                if(!_.isNull(apiKey) && apiKey !== "") {
                    tokenHandler.getFirstToken(apiKey).then(function(data) {
                        $log.debug("Init token on run");
                        tokenHandler.setHeader(data.data.token);
                        tokenHandler.saveToken(data.data.token);
                        tokenHandler.refreshToken(data.data.token);
                        var date = jwtHelper.getTokenExpirationDate(data.data.token);
                        $log.debug("getTokenExpirationDate");
                        $log.debug(date);
                        $timeout(function() {
                            $location.path("/dashboard");
                        });
                        initUser();
                    }, function() {
                        $location.path("/");
                    });
                }else {
                    $log.warn("apiKey empty");
                    $location.path("/");
                }

            });
        }
        /**
         * Get query arg iframe
         */
        var searchObj = $location.search();
        var initApiUrl = appSettings.apiUrl;
        var apiKey = null;

        function protectApiKey(apiKey) {
            var protectedKey = "";
            var last5ApiKey = apiKey.substr(apiKey.length - 5);
            for(var a = 0; a < apiKey.length - 5; a++) {
                protectedKey += "*";
            }
            protectedKey += last5ApiKey;
            return protectedKey;
        }

        if(!_.isEmpty(searchObj)) {
            $log.debug('Have query arg');
            _.forOwn(searchObj, function(v, k) {
                if(k === "apiUrl") {
                    $log.debug("get apiUrl from query arg : " + v);
                    initApiUrl = v;
                    appSettings.apiUrl = v;
                }
                else if(k === "apiKey") {
                    var apiKeyProtected = protectApiKey(v);
                    $log.debug("get apiKey from query arg : " + apiKeyProtected);
                    apiKey = v;
                }
            });
        }

        /**
         * Launch init auth
         */
        initAuth(initApiUrl, apiKey);


        /**
         * Set betaFeatures
         */
        if(appSettings.betaFeatures) {
            $rootScope.betaFeatures = true;
        }

        /*
         * Init
         */
        $rootScope.keys = Object.keys;

        /**
         * Keyboard event
         */
        $rootScope.keyboardClasses = "";
        $rootScope.addClassesBody = function(e) {
            if(e.keyCode === 16) {
                $rootScope.keyboardClasses = "alt-pressed";
            }
        };

        $rootScope.removeClassBody = function(e) {
            $rootScope.keyboardClasses = "";
        };

        /**
         * Setting lang
         */
        var lang = appSettings.lang.default ? appSettings.lang.default : 'en';

        gettextCatalog.debug = appSettings.lang.debug ? true : false;
        gettextCatalog.debugPrefix = appSettings.lang.debugPrefix;
        gettextCatalog.setCurrentLanguage(lang);
        gettextCatalog.loadRemote("./lang/" + lang + "/template.json?" + (new Date()).getTime());

        /**
         * Init lang for moment
         */
        moment.locale(lang);

        /**
         * Launch postMessage
         */
        postMessageHandler.init();

        /**
         * Set route class on the body element
         */
        $rootScope.$on('$routeChangeSuccess', function(event, toState) {
            /*
            * see route.js to classes on body
            */
            $rootScope.bodyClass = $route.current.$$route.bodyClass;
            /*
            * RemoveClass overflowHideBody
            */
            $rootScope.hideBody = '';
            document.body.classList.remove("iconOnly");
        });
    };
    module.exports = OnRun;

}());
