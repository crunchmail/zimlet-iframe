describe('login Factory', function() {
    var element, scope, $httpBackend, apiLogin, appSettings;

    beforeEach(angular.mock.module("crunchConfig"));
    beforeEach(angular.mock.module("zimletCrunchmail.login"));

    beforeEach(angular.mock.inject(function(_$httpBackend_, _apiLogin_, _appSettings_) {
        $httpBackend = _$httpBackend_;
        apiLogin = _apiLogin_;
        appSettings = _appSettings_;

        var baseApi = appSettings.apiUrl;

        $httpBackend.expectPOST(baseApi+'api-token-auth/').respond(200, '{"token": "XXX"}');

    }));

    it("check login method", function() {

        apiLogin.login({"identifier":"admin@example.com", "password":"password"})
        .then(function(data) {
            expect(data.token).toBeDefined();
        });

        $httpBackend.flush();
    });



});
