var mockAPI = require('../../mocked-backend');
var utils = require('../../utils');
describe('recipients', function () {
    // start at root before every test is run
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.addMockModule('httpBackendMock', mockAPI.httpBackendMock, "multiple");

        browser.get(browser.baseUrl);
        utils.encodeBase64(browser.params.apiVersion + 'messages/1/').then(function(link) {
            browser.get(browser.baseUrl + "detailmessage/" + link);
            utils.waitUntilReady(element(by.css('.tabs-message-details v-tab:nth-child(2)')));
            element(by.css('.tabs-message-details v-tab:nth-child(2)')).click().then(function() {
                utils.mockZimbraContact();
            });
        });
    });

    it('Zimbra decrease contact multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
        element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                    expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("0");
                });
            });
        });
    });

    it('Zimbra add contact multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
        element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                    expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(1) .nbre')).getText()).toEqual("2");
                });
            });
        });
    });

    it('Zimbra delete contact multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-content .is-active .listing-contact div:first-child button')));
        element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                    element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(1) button')).click().then(function() {
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
    });

    it('Zimbra decrease group multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                    element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                        expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("0");
                    });
                });
            });
        });
    });

    it('Zimbra add group multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                    element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                        expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(2) .nbre')).getText()).toEqual("2");
                    });
                });
            });
        });
    });

    it('Zimbra delete group multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(2)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                    element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                        element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(2) button')).click().then(function() {
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
    });

    it('Zimbra decrease dl multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                    element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                        expect(element(by.css('.zimlet-tabs-menu .is-active .nbre')).getText()).toEqual("0");
                    });
                });
            });
        });
    });

    it('Zimbra add dl multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                    element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                        expect(element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(3) .nbre')).getText()).toEqual("2");
                    });
                });
            });
        });
    });

    it('Zimbra delete dl multiple', function() {
        utils.waitUntilReady(element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')));
        element(by.css('.zimlet-tabs-menu v-tab:nth-child(3)')).click().then(function() {
            element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(1)')).click().then(function() {
                element(by.css('.zimlet-tabs-content .is-active .listing-contact div:nth-child(2)')).click().then(function() {
                    element(by.css('.zimlet-tabs-content .is-active > button')).click().then(function() {
                        element(by.css('.selected-contact div:nth-child(2) h3.recipients-title-collapse:nth-of-type(3) button')).click().then(function() {
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

});
