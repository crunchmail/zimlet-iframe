var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
describe('login Form', function () {
    // start at root before every test is run
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock);
        browser.get(browser.baseUrl + "categories");
        utils.waitUntilReady(element(by.css('.list-categories')));
    });

    afterEach(function() {
        browser.removeMockModule('httpBackendMock');
    });

    it('Create category', function() {
        element(by.css('.container button[ng-click="createCategory()"]')).click().then(function() {
            utils.waitUntilReady(element(by.css('.ngdialog-content input[type="text"]')));
            element(by.css('.ngdialog-content input[type="text"]')).sendKeys("Test category e2e");
            utils.waitUntilReady(element(by.css('.ngdialog-content button')));
            element(by.css('.ngdialog-content button')).click().then(function() {
                expect(element.all(by.css('.list-categories tbody tr')).count()).toBe(2);
            });
        });
    });

    it('Delete category', function() {
        utils.waitUntilReady(element(by.css('.list-categories tbody tr:nth-child(1) button.btn-dropDown')));
        element(by.css('.list-categories tbody tr:nth-child(1) button.btn-dropDown')).click().then(function() {
            utils.waitUntilReady(element(by.css('.list-categories tbody tr:nth-child(1) .dropDownMenu ul li:nth-child(1) div')));
            element(by.css('.list-categories tbody tr:nth-child(1) .dropDownMenu ul li:nth-child(1) div')).click().then(function() {
                utils.waitUntilReady(element(by.css('.ngdialog-content button[ng-click="confirm()"]')));
                element(by.css('.ngdialog-content button[ng-click="confirm()')).click().then(function() {
                    expect(element(by.css('.list-categories')).isPresent()).toBe(false);
                });
            });
        });
    });

    it('Rename category', function() {
        utils.waitUntilReady(element(by.css('.list-categories tbody tr:nth-child(1) .category-name button')));
        element(by.css('.list-categories tbody tr:nth-child(1) .category-name button')).click().then(function() {
            utils.waitUntilReady(element(by.css('.list-categories tbody tr:nth-child(1) .category-form input')));
            element(by.css('.list-categories tbody tr:nth-child(1) .category-form input')).sendKeys(' renamed');
            element(by.css('.list-categories tbody tr:nth-child(1) .category-form button[ng-click="udpateCatName(item.url, newCatName, item)"]')).click().then(function() {
                utils.waitUntilReady(element(by.css('.list-categories tbody tr:nth-child(1) .category-form span:nth-child(1)')));
                expect(element(by.css('.list-categories tbody tr:nth-child(1) .category-form span:nth-child(1)')).getText()).toEqual('Test e2e renamed');
            });
        });
    });
});
