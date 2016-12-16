var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
describe('login Form', function () {
    // start at root before every test is run
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock);
        browser.get(browser.baseUrl);
    });

    afterEach(function() {
        browser.removeMockModule('httpBackendMock');
    });

    it('check fail log', function() {

        element( by.model('user.identifier') ).sendKeys('admin@xample.com');
        element( by.model('user.password') ).sendKeys('passwor');
        element( by.css('[ng-click="connect()"]') ).click().then(function() {
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
            expect(element(by.css('[class*="error"]')).isPresent()).toBe(true);
        });
    });

    it('ensures user can log in', function() {

        element( by.model('user.identifier') ).sendKeys('admin@example.com');
        element( by.model('user.password') ).sendKeys('password');
        element( by.css('[ng-click="connect()"]') ).click().then(function() {
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'dashboard');
        });

    });
});
