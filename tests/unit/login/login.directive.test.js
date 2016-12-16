describe('login form', function() {
    var element, scope, $httpBackend;

    /*
    * load templates
    */
    //beforeEach(angular.mock.module("/lang/fr/template.json"));

    beforeEach(angular.mock.module("external-libraries"));
    beforeEach(angular.mock.module("crunchConfig"));
    beforeEach(angular.mock.module('zimletCrunchmail.factory'));
    beforeEach(angular.mock.module("zimletCrunchmail.login"));

    beforeEach(angular.mock.module("./views/commons/login/login.html"));
    //beforeEach(angular.mock.module("./views/commons/login/login.layout.html"));


    beforeEach(angular.mock.inject(function($compile, $rootScope, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope;
        element = angular.element('<cm-login-form></cm-login-form>');
        $compile(element)(scope);
        scope.$digest();
    }));

    it('Should view login form loaded', function() {
        expect(scope.loginForm.$valid).toBeFalsy();
        //$httpBackend.flush();
    });


});
