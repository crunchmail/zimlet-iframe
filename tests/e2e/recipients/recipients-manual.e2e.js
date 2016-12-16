var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
describe('recipients', function () {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock, "manual");

        browser.get(browser.baseUrl);
        utils.encodeBase64(browser.params.apiVersion + 'messages/1/').then(function(link) {
            browser.get(browser.baseUrl + "detailmessage/" + link);
            utils.waitUntilReady(element(by.css('.tabs-message-details v-tab:nth-child(2)')));
            element(by.css('.tabs-message-details v-tab:nth-child(2)')).click().then(function() {
                utils.waitUntilReady(element(by.css('.recipients-tab v-tab:nth-child(4)')));
                element(by.css('.recipients-tab v-tab:nth-child(4)')).click();
            });
        });
    });

    it("add manual", function() {
        utils.waitUntilReady(element(by.css('.container-textarea-recipients textarea')));
        element(by.css('.container-textarea-recipients textarea')).sendKeys('test_manual@example.com');
        element(by.css('.container-textarea-recipients button')).click().then(function() {
            expect(element(by.css('.container_manual h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("1");
        });
    });

    it("delete manual", function() {
        utils.waitUntilReady(element(by.css('.container-textarea-recipients textarea')));
        element(by.css('.container-textarea-recipients textarea')).sendKeys('test_manual@example.com');
        element(by.css('.container-textarea-recipients button')).click().then(function() {
            element(by.css('.container_manual h3.recipients-title-collapse:nth-of-type(1)')).click().then(function() {
                utils.waitUntilReady(element(by.css('.container_manual .list-contact-selected li:first-child')));
                element(by.css('.container_manual .list-contact-selected li:first-child button')).click().then(function() {
                    utils.waitUntilReady(element(by.css('.ngdialog-content button[ng-click="confirm()"]')));
                    element(by.css('.ngdialog-content button[ng-click="confirm()"]')).click().then(function() {
                        expect(element(by.css('.container_manual h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("0");
                    });
                });
            });
        });
    });
});
