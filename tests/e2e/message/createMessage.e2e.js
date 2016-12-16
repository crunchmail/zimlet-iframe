var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
describe('createMessage', function () {
    // start at root before every test is run
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock);
        browser.get(browser.baseUrl + 'create-message');
    });

    afterEach(function() {
        browser.removeMockModule('httpBackendMock');
    });

    it('Information message', function() {

        element( by.model('message.name') ).sendKeys('test Message e2e');
        element( by.model('message.sender_name') ).sendKeys('test Message e2e');
        element( by.model('message.subject') ).sendKeys('test Subject e2e');
        element( by.model('firstPartMail') ).sendKeys('test_e2e');
        element( by.model('message.category') ).sendKeys('Test e2e');

        // expect(element(by.css('button[disabled="disabled"][ng-click="showEditor()"]')).isPresent()).toBe(false);
        element( by.css('[ng-click="showEditor()"]') ).click().then(function() {
            utils.waitUntilReady(element(by.css('#editeurContainer')));
            expect(element(by.css("#editeurContainer")).isPresent()).toBe(true);
        });

    });

    it('Create category', function() {
        utils.waitUntilReady(element(by.css('[ng-click="createCategory()"]')));
        element( by.css('[ng-click="createCategory()"]') ).click().then(function() {
            utils.waitUntilReady(element(by.css('.ngdialog-content input[type="text"]')));
            element( by.css('.ngdialog-content input[type="text"]') ).sendKeys('Test category e2e');
            element( by.css('.ngdialog-content button[type="submit"]') ).click().then(function() {
                // utils.waitUntilReady(element(by.css('.formCreateMessage #categories')));
                expect(element.all(by.css('.formCreateMessage #categories option')).count()).toBe(3);
            });
        });
    });
});
