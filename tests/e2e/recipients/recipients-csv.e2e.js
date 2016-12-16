var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
var path = require("path");
describe('recipients', function () {
    // start at root before every test is run
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock, "csv");

        browser.get(browser.baseUrl);
        utils.encodeBase64(browser.params.apiVersion + 'messages/1/').then(function(link) {
            browser.get(browser.baseUrl + "detailmessage/" + link);
            utils.waitUntilReady(element(by.css('.tabs-message-details v-tab:nth-child(2)')));
            element(by.css('.tabs-message-details v-tab:nth-child(2)')).click().then(function() {
                utils.waitUntilReady(element(by.css('.recipients-tab v-tab:nth-child(3)')));
                element(by.css('.recipients-tab v-tab:nth-child(3)')).click();
            });
        });
    });

    it("add csv", function() {
        var fileUpload = '../../test_contacts.csv';
        var absolutePath = path.resolve('../../test_contacts.csv', fileUpload);
        utils.waitUntilReady(element(by.css('.importCsvContainer')));
        element(by.css('.importCsvContainer input[type="file"]')).sendKeys(absolutePath);
        utils.addMockCsv().then(function() {
            utils.waitUntilReady(element(by.css('.container-csv button.classic-btn')));
            element(by.css('.container-csv button.classic-btn')).click().then(function() {
                expect(element(by.css('.container_allcontacts h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("10");
            });
        });
    });

    it("delete single csv", function() {
        var fileUpload = '../../test_contacts.csv';
        var absolutePath = path.resolve('../../test_contacts.csv', fileUpload);
        utils.waitUntilReady(element(by.css('.importCsvContainer')));
        element(by.css('.importCsvContainer input[type="file"]')).sendKeys(absolutePath);
        utils.addMockCsv().then(function() {
            utils.waitUntilReady(element(by.css('.container-csv button.classic-btn')));
            element(by.css('.container-csv button.classic-btn')).click().then(function() {
                element(by.css('.container_allcontacts h3.recipients-title-collapse:nth-of-type(1)')).click().then(function() {
                    utils.waitUntilReady(element(by.css('#csv-content .list-contact-selected > li:nth-child(1)')));
                    element(by.css('#csv-content .list-contact-selected > li:nth-child(1) button')).click().then(function() {
                        utils.waitUntilReady(element(by.css('.ngdialog-content button[ng-click="confirm()"]')));
                        element(by.css('.ngdialog-content button[ng-click="confirm()"]')).click().then(function() {
                            expect(element(by.css('.container_allcontacts h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("9");
                        });
                    });
                });
            });
        });
    });

    it("delete all csv", function() {
        var fileUpload = '../../test_contacts.csv';
        var absolutePath = path.resolve('../../test_contacts.csv', fileUpload);
        utils.waitUntilReady(element(by.css('.importCsvContainer')));
        element(by.css('.importCsvContainer input[type="file"]')).sendKeys(absolutePath);
        utils.addMockCsv().then(function() {
            utils.waitUntilReady(element(by.css('.container-csv button.classic-btn')));
            element(by.css('.container-csv button.classic-btn')).click().then(function() {
                element(by.css('.container_allcontacts h3.recipients-title-collapse:nth-of-type(1) button')).click().then(function() {
                    utils.waitUntilReady(element(by.css('.ngdialog-content button[ng-click="confirm()"]')));
                    element(by.css('.ngdialog-content button[ng-click="confirm()"]')).click().then(function() {
                        expect(element(by.css('.container_allcontacts h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("0");
                    });
                });
            });
        });
    });

});
