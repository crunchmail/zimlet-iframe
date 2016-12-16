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
                utils.mockZimbraContact();
            });
        });
    });

    it('Zimbra contact decrease contact', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
        element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
            // Check if number decrease
            expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("1");

        });
    });

    it('Zimbra contact add contact', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
        element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
            // Check contact correctly added
            expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("1");
        });
    });

    it('Zimbra contact delete contact', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
        element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
            utils.waitUntilReady(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(1)')));
            element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(1)')).click().then(function() {
                utils.waitUntilReady(element(by.css('.recipients-content-collapse.is-active .list-contact-selected')));
                element(by.css('.recipients-content-collapse.is-active .list-contact-selected > li:first-child button')).click().then(function() {
                    utils.waitUntilReady(element(by.css('.ngdialog-content button[ng-click="confirm()"]')));
                    element(by.css('.ngdialog-content button[ng-click="confirm()')).click().then(function() {
                        utils.mockZimbraContact();
                        expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("0");
                        expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("2");
                    });
                });
            });
        });
    });

    it('Zimbra group add group', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
                expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(2) .nbre')).getText()).toEqual("1");
            });
        });
    });

    it('Zimbra group decrease group', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
                expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("1");
            });
        });
    });

    it('Zimbra group delete group', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
                element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(2)')).click().then(function() {
                    utils.waitUntilReady(element(by.css('.recipients-content-collapse.is-active .list-contact-selected')));
                    element(by.css('.recipients-content-collapse.is-active .list-contact-selected > li:first-child button')).click().then(function() {
                        utils.waitUntilReady(element(by.css('.ngdialog-content button[ng-click="confirm()"]')));
                        element(by.css('.ngdialog-content button[ng-click="confirm()')).click().then(function() {
                            utils.mockZimbraContact();
                            expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(2) .nbre')).getText()).toEqual("0");
                            expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("2");
                        });
                    });
                });
            });
        });
    });

    it('Zimbra dl add dl', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
                expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(3) .nbre')).getText()).toEqual("1");
            });
        });
    });

    it('Zimbra dl decrease dl', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
                expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("1");
            });
        });
    });

    it('Zimbra dl delete dl', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')).click().then(function() {
                element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(3)')).click().then(function() {
                    utils.waitUntilReady(element(by.css('.recipients-content-collapse.is-active .list-contact-selected')));
                    element(by.css('.recipients-content-collapse.is-active .list-contact-selected > li:first-child button')).click().then(function() {
                        utils.waitUntilReady(element(by.css('.ngdialog-content button[ng-click="confirm()"]')));
                        element(by.css('.ngdialog-content button[ng-click="confirm()')).click().then(function() {
                            utils.mockZimbraContact();
                            expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(3) .nbre')).getText()).toEqual("0");
                            expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("2");
                        });
                    });
                });
            });
        });
    });
});
