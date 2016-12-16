describe('token Handler', function() {
    var element, scope, $httpBackend, localStorageService, appSettings, tokenHandler, mockToken, $interval, callBackFct;

    beforeEach(angular.mock.module("crunchConfig"));
    beforeEach(angular.mock.module("external-libraries"));
    beforeEach(angular.mock.module("zimletCrunchmail.factory"));

    beforeEach(angular.mock.inject(function(_$httpBackend_, _localStorageService_, _appSettings_, _tokenHandler_, _$interval_) {
        mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGV4YW1wbGUuY29tIiwib3JpZ19pYXQiOjE0NDkyMzU0NTEsImV4cCI6MTQ0OTI0NTM5MX0.3ysW9ey9X3rWy0vFZsThD2MUv9KgoC3iS88RGvyxR_8";

        $httpBackend = _$httpBackend_;
        $interval = _$interval_;

        localStorageService = _localStorageService_;
        appSettings = _appSettings_;
        tokenHandler = _tokenHandler_;
        callBackFct = jasmine.createSpy('callBackFct');

        var baseApi = appSettings.apiUrl;

        /*
        * httpBackend method
        */
        $httpBackend.expectPOST(baseApi+'api-token-refresh/', '{"token":"'+mockToken+'"}').respond(200, '{"token": "return_token"}');
    }));

    it("check if token saved", function() {

        tokenHandler.saveToken(mockToken);
        //
        expect(tokenHandler.getToken("token")).toEqual(mockToken);
    });

    it("check if token deleted", function() {
        tokenHandler.saveToken(mockToken);
        tokenHandler.deleteToken();

        expect(localStorageService.get("token")).toEqual(null);
    });

    it("check get new token", function() {
        tokenHandler.getNewToken(mockToken).then(function(data) {
            expect(data.token).toBeDefined();
        });
        $httpBackend.flush();
    });

    it("check if token refreshed", function() {
        $interval(function() {
            callBackFct();
        }, 2000);

        $interval.flush(2000);

        expect(callBackFct).toHaveBeenCalled();
    });


});
