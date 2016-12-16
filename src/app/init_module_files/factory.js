module.exports = angular.module('zimletCrunchmail.factory', [])

//Commmon
.factory('apiUrl', require('_factory/apiUrl.factory'))
.factory('messageStats', require('_factory/messageStats.factory'))
.factory('globalFunction', require('_factory/globalFunction.factory'))
.factory('cmNotify', require('_factory/cmNotify.factory'))

.factory('sessionStorageService', require('_factory/sessionStorage.factory'))
.factory('infiniteScrollFactory', require('_factory/infiniteScroll/infiniteScroll.factory'))
.factory('zimletHandler', require('_factory/zimletHandler.factory'))
.factory('tokenHandler', require('_factory/tokenHandler.factory'))
.factory('base64', require('_factory/base64.factory'))
.factory('postMessageHandler', require('_factory/postMessageHandler.factory'))
.factory('toothpasteHandler', require('_factory/toothpasteHandler.factory'))
.factory('authInterceptor', require('_factory/authInterceptor.factory'));
