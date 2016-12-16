var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
describe('listingMessage', function () {
    // start at root before every test is run
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock);
        browser.get(browser.baseUrl + 'messages/all');
    });

    afterEach(function() {
        browser.removeMockModule('httpBackendMock');
    });

    it('Delete message', function() {
        utils.waitUntilReady(element(by.css('.table-status')));
        element(by.css(".table-status tbody tr:first-child button.btn-dropDown")).click().then(function() {
            utils.waitUntilReady(element( by.css('.table-status tbody tr:first-child [ng-click="deleteMessage(item.url, $index)"]') ));
            element( by.css('.table-status tbody tr:first-child [ng-click="deleteMessage(item.url, $index)"]')).click().then(function() {
                utils.waitUntilReady(element(by.css('.ngdialog-content button[ng-click="confirm()"]')));
                element(by.css('.ngdialog-content button[ng-click="confirm()')).click().then(function() {
                    expect(element.all(by.css('.table-status tbody tr')).count()).toBe(1);
                });
            });

        });
    });

    it("Duplicate message", function() {
        utils.waitUntilReady(element(by.css('.table-status')));
        element(by.css(".table-status tbody tr:first-child button.btn-dropDown")).click().then(function() {
            utils.waitUntilReady(element( by.css('.table-status tbody tr:first-child [ng-click="duplicateMessage(item.url, $index)"]') ));
            element( by.css('.table-status tbody tr:first-child [ng-click="duplicateMessage(item.url, $index)"]')).click().then(function() {
                expect(element.all(by.css('.table-status tbody tr')).count()).toBe(3);
            });

        });
    });
});
