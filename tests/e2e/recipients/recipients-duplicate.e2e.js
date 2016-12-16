var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
describe('recipients', function () {
    // start at root before every test is run
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock, "single");

        browser.get(browser.baseUrl);
        utils.encodeBase64(browser.params.apiVersion + 'messages/1/').then(function(link) {
            browser.get(browser.baseUrl + "detailmessage/" + link);
            utils.waitUntilReady(element(by.css('.tabs-message-details v-tab:nth-child(2)')));
            element(by.css('.tabs-message-details v-tab:nth-child(2)')).click().then(function() {
                utils.mockZimbraDuplicateContact();
            });
        });
    });

    it('Zimbra add duplicates contact', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
        element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                    utils.waitUntilReady(element(by.css('.recipients-duplicate-content tbody tr:first-child input[type="radio"] + label')));
                    element(by.css('.recipients-duplicate-content tbody tr:first-child input[type="radio"] + label')).click().then(function() {
                        utils.waitUntilReady(element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')));
                        element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')).click().then(function() {
                            expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("1");
                            expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("1");
                        });
                    });
                    //expect(element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')).getText()).toEqual("0");
                });
            });
        });
    });

    it('Zimbra add duplicates group', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')).click().then(function() {
            utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                    element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                        utils.waitUntilReady(element(by.css('.recipients-duplicate-content tbody tr:first-child input[type="radio"] + label')));
                        element(by.css('.recipients-duplicate-content tbody tr:first-child input[type="radio"] + label')).click().then(function() {
                            utils.waitUntilReady(element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')));
                            element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')).click().then(function() {
                                expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("1");
                                expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(2) .nbre')).getText()).toEqual("1");
                            });
                        });
                        //expect(element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')).getText()).toEqual("0");
                    });
                });
            });
        });
    });

    it('Zimbra add duplicates dl', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')).click().then(function() {
            utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                    element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                        utils.waitUntilReady(element(by.css('.recipients-duplicate-content tbody tr:first-child input[type="radio"] + label')));
                        element(by.css('.recipients-duplicate-content tbody tr:first-child input[type="radio"] + label')).click().then(function() {
                            utils.waitUntilReady(element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')));
                            element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')).click().then(function() {
                                expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("1");
                                expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(3) .nbre')).getText()).toEqual("1");
                            });
                        });
                        //expect(element(by.css('.ngdialog-content .recipients-duplicate-action-buttons button[type="submit')).getText()).toEqual("0");
                    });
                });
            });
        });
    });

});
