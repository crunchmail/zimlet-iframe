exports.waitUntilReady = function(elm) {
    browser.wait(function () {
        return elm.isPresent();
    });
    browser.wait(function () {
        return elm.isDisplayed();
    });
};

exports.selectText = function(elm) {
    browser.executeScript(function(el) {
        console.log(el);
        var range = document.createRange();
        range.selectNode(document.body.querySelector(el));

        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);

        return sel;
    }, elm);
};

exports.setAttr = function(elm, attr, value) {
    browser.executeScript(function(el, attr, value) {
        document.body.querySelector(el).setAttribute(attr, value);
    }, elm, attr, value);
};

exports.encodeBase64 = function(value) {
    return browser.executeScript(function(value) {
        return window.btoa(value);
    }, value);
};

exports.mockZimbraContact = function() {
    browser.executeScript(function() {
        var mockZimbraContact = {
            "contacts": [
                {
                    "email": "test_contact1@test.com",
                    "id": "d4cea795-3184-47e2-a281-ddaddb150178:581",
                    "name": "test Contact 1",
                    "properties" : {
                        "firstName": "Test firstName 1",
                        "lastName": "Test lastName 1",
                        "namePrefix": ""
                    },
                    "source_ref": "contact:d4cea795-3184-47e2-a281-ddaddb150178:581",
                    "source_type": "zimbra-contact"
                },
                {
                    "email": "test_contact2@test.com",
                    "id": "d4cea795-3184-47e2-a281-ddaddb150178:582",
                    "name": "test Contact 2",
                    "properties" : {
                        "firstName": "Test firstName 2",
                        "lastName": "Test lastName 2",
                        "namePrefix": ""
                    },
                    "source_ref": "contact:d4cea795-3184-47e2-a281-ddaddb150178:582",
                    "source_type": "zimbra-contact"
                }
            ],
            "groups": [
                {
                    "id":"d4cea795-3184-47e2-a281-ddaddb150178:1121",
                    "name": "group Test 1",
                    "members": [
                        {
                            "email": "test_group_member1@test.com",
                            "properties" : {
                                "firstName": "Test firstName group 1",
                                "lastName": "Test lastName group 1",
                                "namePrefix": "M"
                            },
                            "source_ref": "group:d4cea795-3184-47e2-a281-ddaddb150178:1121",
                            "source_type": "zimbra-group"
                        }
                    ]
                },
                {
                    "id":"d4cea795-3184-47e2-a281-ddaddb150178:1122",
                    "name": "group Test 2",
                    "members": [
                        {
                            "email": "test_group_member2@test.com",
                            "properties" : {
                                "firstName": "Test firstName group 2",
                                "lastName": "Test lastName group 2",
                                "namePrefix": "M"
                            },
                            "source_ref": "group:d4cea795-3184-47e2-a281-ddaddb150178:1122",
                            "source_type": "zimbra-group"
                        }
                    ]
                }
            ],
            "dls": [
                {
                    "id": "b8068547-efc8-4aaa-b361-8a3531790f77",
                    "name": "dl Test 1",
                    "email": "test-dl1@test.com",
                    "members": [
                        {
                            "email":"test_dl_member1@test.com",
                            "properties" : {
                                "firstName": "Test firstName dl 1",
                                "lastName": "Test lastName dl 1",
                                "namePrefix": "M"
                            },
                            "source_ref": "dl:b8068547-efc8-4aaa-b361-8a3531790f77:b8068547-efc8-4aaa-b361-8a3531790f77",
                            "source_type": "zimbra-dl"
                        }
                    ]
                },
                {
                    "id": "b8068547-efc8-4aaa-b361-8a3531790f78",
                    "name": "dl Test 2",
                    "email": "test-dl2@test.com",
                    "members": [
                        {
                            "email":"test_dl_member2@test.com",
                            "properties" : {
                                "firstName": "Test firstName dl 2",
                                "lastName": "Test lastName dl 2",
                                "namePrefix": "M"
                            },
                            "source_ref": "dl:b8068547-efc8-4aaa-b361-8a3531790f77:b8068547-efc8-4aaa-b361-8a3531790f78",
                            "source_type": "zimbra-dl"
                        }
                    ]
                }
            ],
            "remaining": {},
            "existing": {},
            "tags": [],
            "zimbraContactId": {}
        };

        angular.element(document).scope().$broadcast('collectedContact', { collectedContact : mockZimbraContact});
    });
};


exports.mockZimbraDuplicateContact = function() {
    browser.executeScript(function() {
        var mockZimbraContact = {
            "contacts": [
                {
                    "email": "test_contact1@test.com",
                    "id": "d4cea795-3184-47e2-a281-ddaddb150178:581",
                    "name": "test Contact 1",
                    "properties" : {
                        "firstName": "Test firstName 1",
                        "lastName": "Test lastName 1",
                        "namePrefix": ""
                    },
                    "source_ref": "contact:d4cea795-3184-47e2-a281-ddaddb150178:581",
                    "source_type": "zimbra-contact"
                },
                {
                    "email": "test_contact1@test.com",
                    "id": "d4cea795-3184-47e2-a281-ddaddb150178:581",
                    "name": "test Contact 1",
                    "properties" : {
                        "firstName": "Test firstName 1",
                        "lastName": "Test lastName 1",
                        "namePrefix": ""
                    },
                    "source_ref": "contact:d4cea795-3184-47e2-a281-ddaddb150178:581",
                    "source_type": "zimbra-contact"
                }
            ],
            "groups": [
                {
                    "id":"d4cea795-3184-47e2-a281-ddaddb150178:1121",
                    "name": "group Test 1",
                    "members": [
                        {
                            "email": "test_group_member1@test.com",
                            "properties" : {
                                "firstName": "Test firstName group 1",
                                "lastName": "Test lastName group 1",
                                "namePrefix": "M"
                            },
                            "source_ref": "group:d4cea795-3184-47e2-a281-ddaddb150178:1121",
                            "source_type": "zimbra-group"
                        }
                    ]
                },
                {
                    "id":"d4cea795-3184-47e2-a281-ddaddb150178:1122",
                    "name": "group Test 2",
                    "members": [
                        {
                            "email": "test_group_member1@test.com",
                            "properties" : {
                                "firstName": "Test firstName group 1",
                                "lastName": "Test lastName group 1",
                                "namePrefix": "M"
                            },
                            "source_ref": "group:d4cea795-3184-47e2-a281-ddaddb150178:1122",
                            "source_type": "zimbra-group"
                        }
                    ]
                }
            ],
            "dls": [
                {
                    "id": "b8068547-efc8-4aaa-b361-8a3531790f77",
                    "name": "dl Test 1",
                    "email": "test-dl1@test.com",
                    "members": [
                        {
                            "email":"test_dl_member1@test.com",
                            "properties" : {
                                "firstName": "Test firstName dl 1",
                                "lastName": "Test lastName dl 1",
                                "namePrefix": "M"
                            },
                            "source_ref": "dl:b8068547-efc8-4aaa-b361-8a3531790f77:b8068547-efc8-4aaa-b361-8a3531790f77",
                            "source_type": "zimbra-dl"
                        }
                    ]
                },
                {
                    "id": "b8068547-efc8-4aaa-b361-8a3531790f78",
                    "name": "dl Test 2",
                    "email": "test-dl2@test.com",
                    "members": [
                        {
                            "email":"test_dl_member1@test.com",
                            "properties" : {
                                "firstName": "Test firstName dl 1",
                                "lastName": "Test lastName dl 1",
                                "namePrefix": "M"
                            },
                            "source_ref": "dl:b8068547-efc8-4aaa-b361-8a3531790f77:b8068547-efc8-4aaa-b361-8a3531790f78",
                            "source_type": "zimbra-dl"
                        }
                    ]
                }
            ],
            "remaining": {},
            "existing": {},
            "tags": [],
            "zimbraContactId": {}
        };

        angular.element(document).scope().$broadcast('collectedContact', { collectedContact : mockZimbraContact});
    });
};

exports.addMockCsv = function() {
    return browser.executeScript(function() {
        angular.element(document.querySelector('.contactContainer')).scope().$apply(function() {
            angular.element(document.querySelector('.contactContainer')).scope().headerCsv = ["email","first","last"];
            angular.element(document.querySelector('.contactContainer')).scope().csvResult = [{
                "email": "lo@lah.edu",
                "first": "Shane",
                "last": "Beck"
            }, {
                "email": "ge@nufjulogu.co.uk",
                "first": "Lucas",
                "last": "Ray"
            }, {
                "email": "gehlo@emuow.org",
                "first": "Julian",
                "last": "Hunt"
            }, {
                "email": "gahok@gujopci.edu",
                "first": "Franklin",
                "last": "Griffin"
            }, {
                "email": "du@fakiw.edu",
                "first": "Steve",
                "last": "Kim"
            }, {
                "email": "bo@ifpud.co.uk",
                "first": "Curtis",
                "last": "Greene"
            }, {
                "email": "ru@miwano.org",
                "first": "Philip",
                "last": "Klein"
            }, {
                "email": "siwarpiz@hozawfe.net",
                "first": "Hannah",
                "last": "Campbell"
            }, {
                "email": "bativhap@hehreuru.gov",
                "first": "Joe",
                "last": "Ball"
            }, {
                "email": "pinvosvol@siztuf.gov",
                "first": "Anthony",
                "last": "Reed"
            }];
        });

    });
};
