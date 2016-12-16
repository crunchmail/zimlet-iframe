exports.httpBackendMock = function(recipientsResponse) {
    angular.module('httpBackendMock', ['ngMockE2E'])
    .run(function($httpBackend, appSettings) {
        var apiUrl = appSettings.apiUrl;
        var apiVersion = apiUrl + appSettings.version + "/";
        var apiPrivate = apiUrl + "_/";
        $httpBackend.whenPOST(
            apiUrl + "api-token-refresh",
            {
                'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1Njc4OTAsIm5hbWUiOiJKb2huIERvZSIsImFkbWluIjp0cnVlfQ.eoaDVGTClRdfxUZXiPs3f8FmJDkDE_VCQFXqKxpLsts"
            }
        ).respond(200, [
            {
                'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1Njc4OTAsIm5hbWUiOiJKb2huIERvZSIsImFkbWluIjp0cnVlfQ.eoaDVGTClRdfxUZXiPs3f8FmJDkDE_VCQFXqKxpLsts"
            }
        ]);

        $httpBackend.whenGET(/(?:.\/|)lang\/.*/).passThrough();
        $httpBackend.whenGET(/(?:.\/|)views\/.*/).passThrough();
        $httpBackend.whenGET(/css\/.*/).passThrough();

        $httpBackend.whenPOST(apiUrl + "api-token-auth/").respond(function(method, url, data){
            data =  JSON.parse(data);
            if(data.password === "password") {
                return [200, {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1Njc4OTAsIm5hbWUiOiJKb2huIERvZSIsImFkbWluIjp0cnVlfQ.eoaDVGTClRdfxUZXiPs3f8FmJDkDE_VCQFXqKxpLsts"
                }];
            }else {
                return [400, {
                    "non_field_errors":["Unable to login with provided credentials."]
                }];
            }

        });

        $httpBackend.whenPOST(
            apiVersion + "messages/"
        ).respond(201,
            {
                "url": apiVersion + "messages/3/",
                "id": 11,
                "name": "test Message e2e",
                "sender_email": "test_e2e@example.com",
                "sender_name": "test Message e2e",
                "subject": "test Subject e2e",
                "html": "<p>Test</p>",
                "status": "message_ok",
                "category": apiVersion + "categories/1/",
                "recipient_count": 0,
                "properties": null,
                "creation_date": "2016-09-07T10:17:54.665782Z",
                "send_date": null,
                "completion_date": null,
                "track_open": true,
                "track_clicks": true,
                "external_optout": false,
                "detach_images": false,
                "spam_score": 0.0,
                "spam_details": [
                    {
                        "score": 0.0,
                        "name": "HTML_MESSAGE",
                        "description": "BODY: HTML inclus dans le message"
                    }
                ],
                "is_spam": false,
                "msg_issue": "",
                "_links": {
                    "preview_send": {
                        "href": apiVersion + "messages/3/preview_send/"
                    },
                    "preview": {
                        "href": apiVersion + "messages/3/preview/"
                    },
                    "preview.html": {
                        "href": apiVersion + "messages/3/preview.html"
                    },
                    "preview.txt": {
                        "href": apiVersion + "messages/3/preview.txt"
                    },
                    "recipients": {
                        "href": apiVersion + "messages/3/recipients/"
                    },
                    "bounces": {
                        "href": apiVersion + "messages/3/bounces/"
                    },
                    "opt_outs": {
                        "href": apiVersion + "messages/3/opt_outs/"
                    },
                    "stats": {
                        "href": apiVersion + "messages/3/stats/"
                    },
                    "attachments": {
                        "href": apiVersion + "messages/3/attachments/"
                    },
                    "archive_url": {
                        "href": apiUrl + "archive/rBEpaLsQQTi26MP4KSuk8A/"
                    }
                }
            }
        );

        var messageStatus = new RegExp(apiVersion + "messages\/?");
        var messageId = new RegExp(apiVersion + "messages\/[0-9]\/");

        console.log(messageStatus);
        console.log(messageId);

        $httpBackend.whenGET(
            messageId
        ).respond(200,
            {
                "url": apiVersion + "messages/1/",
                "id": 1,
                "name": "Test message 1",
                "sender_email": "test@example.com",
                "sender_name": "test",
                "subject": "test",
                "html": "<p>test</p>",
                "status": "message_ok",
                "category": apiVersion + "categories/1/",
                "recipient_count": 0,
                "properties": null,
                "creation_date": "2016-09-07T10:17:54.665782Z",
                "send_date": null,
                "completion_date": null,
                "track_open": true,
                "track_clicks": true,
                "external_optout": false,
                "detach_images": false,
                "spam_score": 0.0,
                "spam_details": [
                    {
                        "score": 0.0,
                        "name": "HTML_MESSAGE",
                        "description": "BODY: HTML inclus dans le message"
                    }
                ],
                "is_spam": false,
                "msg_issue": "",
                "_links": {
                    "preview_send": {
                        "href": apiVersion + "messages/1/preview_send/"
                    },
                    "preview": {
                        "href": apiVersion + "messages/1/preview/"
                    },
                    "preview.html": {
                        "href": apiVersion + "messages/1/preview.html"
                    },
                    "preview.txt": {
                        "href": apiVersion + "messages/1/preview.txt"
                    },
                    "recipients": {
                        "href": apiVersion + "messages/1/recipients/"
                    },
                    "bounces": {
                        "href": apiVersion + "messages/1/bounces/"
                    },
                    "opt_outs": {
                        "href": apiVersion + "messages/1/opt_outs/"
                    },
                    "stats": {
                        "href": apiVersion + "messages/1/stats/"
                    },
                    "attachments": {
                        "href": apiVersion + "messages/1/attachments/"
                    },
                    "archive_url": {
                        "href": apiUrl + "archive/rBEpaLsQQTi26MP4KSuk8A/"
                    }
                }
            }
        );

        $httpBackend.whenPATCH(
            messageId
        ).respond(200,
            {
                "url": apiVersion + "messages/1/",
                "id": 1,
                "name": "Test message 1 update",
                "sender_email": "test@example.com",
                "sender_name": "test",
                "subject": "test",
                "html": "<p>test</p>",
                "status": "message_ok",
                "category": apiVersion + "categories/1/",
                "recipient_count": 0,
                "properties": null,
                "creation_date": "2016-09-07T10:17:54.665782Z",
                "send_date": null,
                "completion_date": null,
                "track_open": true,
                "track_clicks": true,
                "external_optout": false,
                "detach_images": false,
                "spam_score": 0.0,
                "spam_details": [
                    {
                        "score": 0.0,
                        "name": "HTML_MESSAGE",
                        "description": "BODY: HTML inclus dans le message"
                    }
                ],
                "is_spam": false,
                "msg_issue": "",
                "_links": {
                    "preview_send": {
                        "href": apiVersion + "messages/1/preview_send/"
                    },
                    "preview": {
                        "href": apiVersion + "messages/1/preview/"
                    },
                    "preview.html": {
                        "href": apiVersion + "messages/1/preview.html"
                    },
                    "preview.txt": {
                        "href": apiVersion + "messages/1/preview.txt"
                    },
                    "recipients": {
                        "href": apiVersion + "messages/1/recipients/"
                    },
                    "bounces": {
                        "href": apiVersion + "messages/1/bounces/"
                    },
                    "opt_outs": {
                        "href": apiVersion + "messages/1/opt_outs/"
                    },
                    "stats": {
                        "href": apiVersion + "messages/1/stats/"
                    },
                    "attachments": {
                        "href": apiVersion + "messages/1/attachments/"
                    },
                    "archive_url": {
                        "href": apiUrl + "archive/rBEpaLsQQTi26MP4KSuk8A/"
                    }
                }
            }
        );

        $httpBackend.whenGET(
            messageStatus
        ).respond(200,
            {
                "count": 2,
                "next": null,
                "previous": null,
                "page_count": 1,
                "results": [
                    {
                        "url": apiVersion + "messages/1/",
                        "id": 1,
                        "name": "Test message 1",
                        "sender_email": "test@example.com",
                        "sender_name": "test",
                        "subject": "test",
                        "html": "<p>test</p>",
                        "status": "message_ok",
                        "category": apiVersion + "categories/1/",
                        "recipient_count": 0,
                        "properties": null,
                        "creation_date": "2016-09-07T10:17:54.665782Z",
                        "send_date": null,
                        "completion_date": null,
                        "track_open": true,
                        "track_clicks": true,
                        "external_optout": false,
                        "detach_images": false,
                        "spam_score": 0.0,
                        "spam_details": [
                            {
                                "score": 0.0,
                                "name": "HTML_MESSAGE",
                                "description": "BODY: HTML inclus dans le message"
                            }
                        ],
                        "is_spam": false,
                        "msg_issue": "",
                        "_links": {
                            "preview_send": {
                                "href": apiVersion + "messages/1/preview_send/"
                            },
                            "preview": {
                                "href": apiVersion + "messages/1/preview/"
                            },
                            "preview.html": {
                                "href": apiVersion + "messages/1/preview.html"
                            },
                            "preview.txt": {
                                "href": apiVersion + "messages/1/preview.txt"
                            },
                            "recipients": {
                                "href": apiVersion + "messages/1/recipients/"
                            },
                            "bounces": {
                                "href": apiVersion + "messages/1/bounces/"
                            },
                            "opt_outs": {
                                "href": apiVersion + "messages/1/opt_outs/"
                            },
                            "stats": {
                                "href": apiVersion + "messages/1/stats/"
                            },
                            "attachments": {
                                "href": apiVersion + "messages/1/attachments/"
                            },
                            "archive_url": {
                                "href": apiUrl + "archive/rBEpaLsQQTi26MP4KSuk8A/"
                            }
                        }
                    },
                    {
                        "url": apiVersion + "messages/2/",
                        "id": 2,
                        "name": "Test message 2",
                        "sender_email": "test@example.com",
                        "sender_name": "test",
                        "subject": "test",
                        "html": "<p>test</p>",
                        "status": "message_ok",
                        "category": apiVersion + "categories/1/",
                        "recipient_count": 0,
                        "properties": null,
                        "creation_date": "2016-09-10T10:17:54.665782Z",
                        "send_date": null,
                        "completion_date": null,
                        "track_open": true,
                        "track_clicks": true,
                        "external_optout": false,
                        "detach_images": false,
                        "spam_score": 0.0,
                        "spam_details": [],
                        "is_spam": false,
                        "msg_issue": "",
                        "_links": {
                            "preview_send": {
                                "href": apiVersion + "messages/2/preview_send/"
                            },
                            "preview": {
                                "href": apiVersion + "messages/2/preview/"
                            },
                            "preview.html": {
                                "href": apiVersion + "messages/2/preview.html"
                            },
                            "preview.txt": {
                                "href": apiVersion + "messages/2/preview.txt"
                            },
                            "recipients": {
                                "href": apiVersion + "messages/2/recipients/"
                            },
                            "bounces": {
                                "href": apiVersion + "messages/2/bounces/"
                            },
                            "opt_outs": {
                                "href": apiVersion + "messages/2/opt_outs/"
                            },
                            "stats": {
                                "href": apiVersion + "messages/2/stats/"
                            },
                            "attachments": {
                                "href": apiVersion + "messages/2/attachments/"
                            },
                            "archive_url": {
                                "href": apiUrl + "archive/rBEpaLsQQTi26MP4KSuk8A/"
                            }
                        }
                    }
                ]
            }
        );

        $httpBackend.whenDELETE(
            messageId
        ).respond(200);

        $httpBackend.whenGET(
            apiVersion + "users/1/"
        ).respond(200, [
            {
                "url": apiVersion + "users/1/",
                "identifier": "admin@example.com",
                "type": "human",
                "groups": [
                    "users"
                ],
                "api_key": "xxx",
                "_links": {
                    "regen_api_key": {
                        "href": apiVersion + "users/1/regen_api_key/"
                    }
                }
            }
        ]);

        $httpBackend.whenGET(
            apiVersion + "me/"
        ).respond(200,
            {
                "_links": {
                   "user": {
                       "href": apiVersion + "users/1/"
                   }
               }
            }
        );

        $httpBackend.whenGET(
            apiVersion + "domains/"
        ).respond(200,
            {
                "count": 1,
                "next": null,
                "previous": null,
                "page_count": 1,
                "results": [
                    {
                        "url": apiVersion + "domains/1/",
                        "name": "example.com",
                        "dkim_status": "ok",
                        "app_domain_status": "ok",
                        "alt_organizations": [],
                        "app_domain": "example.com",
                        "app_domain_status_date": "2016-07-20T12:33:53.882912Z",
                        "dkim_status_date": "2016-07-20T12:33:53.882912Z",
                        "_links": {
                            "revalidate": {
                                "href": apiVersion + "domains/1/revalidate/"
                            }
                        }
                    }
                ]
            }
        );

        $httpBackend.whenGET(
            apiVersion + "categories/"
        ).respond(200,
            {
                "count": 1,
                "next": null,
                "previous": null,
                "page_count": 1,
                "results": [
                    {
                        "url": apiVersion + "categories/1/",
                        "name": "Test e2e",
                        "messages": [],
                        "batches": [],
                        "_links": {
                            "opt_outs": {
                                "href": apiVersion + "categories/1/opt_outs/"
                            },
                            "stats": {
                                "href": apiVersion + "categories/1/stats/"
                            },
                            "messages_stats": {
                                "href": apiVersion + "categories/1/messages_stats/"
                            }
                        }
                    },
                ]
            }
        );

        $httpBackend.whenGET(
            apiVersion + "categories/1/"
        ).respond(200,
            {
                "url": apiVersion + "categories/1/",
                "name": "Test e2e",
                "messages": [],
                "batches": [],
                "_links": {
                    "opt_outs": {
                        "href": apiVersion + "categories/1/opt_outs/"
                    },
                    "stats": {
                        "href": apiVersion + "categories/1/stats/"
                    },
                    "messages_stats": {
                        "href": apiVersion + "categories/1/messages_stats/"
                    }
                }
            }
        );

        var categorieId = new RegExp(apiVersion + "categories\/[0-9]\/");

        $httpBackend.whenDELETE(
            categorieId
        ).respond(200);

        $httpBackend.whenPATCH(
            categorieId
        ).respond(200, {
            "url": apiVersion + "categories/1/",
            "name": "Test e2e udpated",
            "messages": [],
            "batches": [],
            "_links": {
                "opt_outs": {
                    "href": apiVersion + "categories/1/opt_outs/"
                },
                "stats": {
                    "href": apiVersion + "categories/1/stats/"
                },
                "messages_stats": {
                    "href": apiVersion + "categories/1/messages_stats/"
                }
            }
        });

        $httpBackend.whenPOST(
            apiVersion + "categories/"
        ).respond(200,
            {
                "url": apiVersion + "categories/2/",
                "name": "Test category e2e",
                "messages": [],
                "batches": [],
                "_links": {
                    "opt_outs": {
                        "href": apiVersion + "categories/2/opt_outs/"
                    },
                    "stats": {
                        "href": apiVersion + "categories/2/stats/"
                    },
                    "messages_stats": {
                        "href": apiVersion + "categories/2/messages_stats/"
                    }
                }
            }
        );

        /*
         * Documents
         */

         $httpBackend.whenGET(
             apiPrivate + "template-store/documents/1/"
         ).respond(200, {
             "url": apiPrivate + "template-store/documents/1/",
             "name": "Test Template 1",
             "creation_date": "2016-03-09T11:15:35.200084Z",
             "edit_date": "2016-03-09T11:15:35.200114Z",
             "pub_date": null,
             "is_template": true,
             "is_public": true,
             "properties": {},
             "color_set": apiPrivate + "template-store/colorsets/1/",
             "color_set_content": {},
             "color_set_is_dirty": false,
             "style_set": apiPrivate + "template-store/stylesets/1/",
             "style_set_content": "",
             "style_set_is_dirty": true,
             "html": "",
             "content": [{
                 "is_container": true,
                 "id": "id_13eb2f1b-f9c9-d560-ce90-1cb93baabbc8",
                 "tplContainer": "listNoDrop",
                 "classContainer": "crunchWFull",
                 "type": "container",
                 "divClass": "crunchBlock",
                 "widthTable": 550,
                 "divPadding": "10",
                 "icon": "https://cdn.crunchmail.net/assets/editor/t/blocks/icon-1col.svg",
                 "columns": [
                     [{
                         "id": "id_2dca9b11-5938-89a6-2721-618d42b7f7c8",
                         "type": "item",
                         "html": "<h1 class=\"crunchTitle crunchElement\">Donec ullamcorper nulla metus</h1>",
                         "editor_conf": "title"
                     }, {
                         "id": "id_d4d24f2d-28b6-3a74-d1b0-270fd6181204",
                         "type": "item",
                         "html": "<p class=\"crunchText crunchElement\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum accusamus laborum laboriosam consequuntur, enim nihil, rerum necessitatibus voluptates facilis ipsam iste incidunt eius quae atque hic perferendis itaque ad soluta.</p>",
                         "editor_conf": "text"
                     }, {
                         "id": "id_163421f7-2d30-2cac-1ef0-63e54f5c19ce",
                         "type": "item",
                         "html": "<img src=\"http://placehold.it/600x250\" />",
                         "editor_conf": "img"
                     }, {
                         "id": "id_3e557325-dc86-621b-0d96-1c389b9cd7bb",
                         "type": "item",
                         "html": "<table class=\"crunchButton crunchElement\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td><a class=\"crunchLink\" href=\"\">Button</a></td></tr></tbody></table>",
                         "editor_conf": "button"
                     }]
                 ]
             }],
             "thumbnail": ""
         });

        $httpBackend.whenPOST(
            apiPrivate + "template-store/documents/"
        ).respond(200);

        /*
         * Recipients
         */
         if(recipientsResponse === "single") {
             $httpBackend.whenPOST(
                 apiVersion + "recipients/"
             ).respond(200, {
                 "count": 1,
                 "next": null,
                 "previous": null,
                 "page_count": 1,
                 "duplicates": [],
                 "validation_errors": {},
                 "no_address": 0,
                 "results": [
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Test firstName 1",
                             "lastName": "Test lastName 1",
                             "namePrefix": ""
                         },
                         "source_ref": "contact:d4cea795-3184-47e2-a281-ddaddb150178:581",
                         "source_type": "zimbra-contact",
                         "to": "test_contact1@test.com",
                         "url": apiVersion + "recipients/1/"
                     }
                 ]
             });
         }else if(recipientsResponse === "multiple") {
             $httpBackend.whenPOST(
                 apiVersion + "recipients/"
             ).respond(200, {
                 "count": 2,
                 "next": null,
                 "previous": null,
                 "page_count": 1,
                 "duplicates": [],
                 "validation_errors": {},
                 "no_address": 0,
                 "results": [
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Test firstName 1",
                             "lastName": "Test lastName 1",
                             "namePrefix": ""
                         },
                         "source_ref": "contact:d4cea795-3184-47e2-a281-ddaddb150178:581",
                         "source_type": "zimbra-contact",
                         "to": "test_contact1@test.com",
                         "url": apiVersion + "recipients/1/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/2/",
                         "properties": {
                             "firstName": "Test firstName 2",
                             "lastName": "Test lastName 2",
                             "namePrefix": ""
                         },
                         "source_ref": "contact:d4cea795-3184-47e2-a281-ddaddb150178:582",
                         "source_type": "zimbra-contact",
                         "to": "test_contact2@test.com",
                         "url": apiVersion + "recipients/2/"
                     }
                 ]
             });
         }else if (recipientsResponse === "csv") {
             $httpBackend.whenPOST(
                 apiVersion + "recipients/"
             ).respond(200, {
                 "count": 20,
                 "next": null,
                 "previous": null,
                 "page_count": 1,
                 "duplicates": [],
                 "validation_errors": {},
                 "no_address": 0,
                 "results": [
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Shane",
                             "lastName": "Beck",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "lo@lah.edu",
                         "url": apiVersion + "recipients/1/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Lucas",
                             "lastName": "Ray",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "ge@nufjulogu.co.uk",
                         "url": apiVersion + "recipients/2/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Julian",
                             "lastName": "Hunt",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "gehlo@emuow.org",
                         "url": apiVersion + "recipients/3/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Franklin",
                             "lastName": "Griffin",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "gahok@gujopci.edu",
                         "url": apiVersion + "recipients/4/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Steve",
                             "lastName": "Kim",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "du@fakiw.edu",
                         "url": apiVersion + "recipients/5/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Curtis",
                             "lastName": "Greene",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "bo@ifpud.co.uk",
                         "url": apiVersion + "recipients/6/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Philip",
                             "lastName": "Klein",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "ru@miwano.org",
                         "url": apiVersion + "recipients/7/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Hannah",
                             "lastName": "Campbell",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "siwarpiz@hozawfe.net",
                         "url": apiVersion + "recipients/8/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Joe",
                             "lastName": "Ball",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "bativhap@hehreuru.gov",
                         "url": apiVersion + "recipients/9/"
                     },
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {
                             "firstName": "Anthony",
                             "lastName": "Reed",
                             "namePrefix": ""
                         },
                         "source_ref": "test_contact_csv:d4cea795-3184-56e2-a281-ddaddb150178",
                         "source_type": "csv",
                         "to": "pinvosvol@siztuf.gov",
                         "url": apiVersion + "recipients/10/"
                     }
                 ]
             });
         }else if (recipientsResponse === "manual") {
             $httpBackend.whenPOST(
                 apiVersion + "recipients/"
             ).respond(200, {
                 "count": 1,
                 "next": null,
                 "previous": null,
                 "page_count": 1,
                 "duplicates": [],
                 "validation_errors": {},
                 "no_address": 0,
                 "results": [
                     {
                         "date":"2016-09-14T10:23:40.806899Z",
                         "message": apiVersion + "messages/1/",
                         "properties": {

                         },
                         "source_ref": "",
                         "source_type": "manual",
                         "to": "test_manual@example.com",
                         "url": apiVersion + "recipients/1/"
                     }
                 ]
             });
         }

         var recipientsId = new RegExp(apiVersion + "recipients\/[0-9]\/");

         $httpBackend.whenDELETE(
             recipientsId
         ).respond(200);

         $httpBackend.whenDELETE(
            apiVersion + "recipients/"
         ).respond(200);
    });
};
