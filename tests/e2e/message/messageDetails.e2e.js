var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
var path = require('path');
describe('messageDetails', function () {
    // start at root before every test is run
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock);
        browser.get(browser.baseUrl + 'messages/all');
    });

    afterEach(function() {
        browser.removeMockModule('httpBackendMock');
    });

    it('Update message', function() {
        utils.waitUntilReady(element(by.css('.table-status')));

        element(by.css(".table-status tbody tr:first-child div.dropDownMenu > a.btn-dropDown")).click().then(function() {
            utils.waitUntilReady(element(by.model('message.name')));
        });
        element( by.model('message.name') ).sendKeys(' update');
        element( by.css('[ng-click="updateMessage()"]') ).click().then(function() {
            utils.waitUntilReady(element(by.css('.notifications .success')));
            expect(element(by.css(".notifications .success")).isPresent()).toBe(true);
        });
    });
    //
    // it('Add Attachments', function() {
    //     var fileUpload = '../../test_attachments.pdf';
    //     var absolutePath = path.resolve('../../test_attachments.pdf', fileUpload);
    //     utils.waitUntilReady(element(by.css('#attachments [ng-click="addInput()"]')));
    //     element(by.css('#attachments [ng-click="addInput()"]')).click().then(function() {
    //         utils.waitUntilReady(element(by.css('.list-attachments li:first-child .inputAttachments input[type="file"]')));
    //         element(by.css('.list-attachments li:first-child .inputAttachments input[type="file"]')).sendKeys(absolutePath);
    //
    //         // element(by.css('#attachments [ng-click="uploadAttachments()"]')).click().then(function() {
    //         //     browser.pause();
    //         // });
    //
    //     });
    // });

});
