(function () {
    'use strict';

    var appSettings = {
        apiUrl : 'http://127.0.0.1.8000/',
        version: 'v1',
        apiKey: '',
        urlEditeur: '',
        debug: true,
        source: 'Zimlet',
        betaFeatures: false,
        //idQuickTpl: "",
        raven: {
            dsn: ''
        },
        lang: {
            default: 'fr',
            // allow to see missing translations
            debug: true,
            // default is "[MISSING]:"
            debugPrefix: '¬ '
        },
        config: {
            release: 'VERSION',
            tags: {
                git_commit: 'COMMIT',
                env: 'ENVIRONMENT'
            }
        }
    };

    module.exports = appSettings;
}());
