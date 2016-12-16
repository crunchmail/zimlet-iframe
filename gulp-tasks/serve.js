var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-if': 'gulpif',
        'gulp-angular-gettext': 'gettext',
        'gulp-tag-version': 'tag_version'
    }
});
var argv = require('yargs')
.default('env', 'local')
.default('config', '')
.argv;

var paths = require('../gulp.config.json');

var configApiFile = argv.config === '' ? paths.configFile + argv.env + '-constant' : paths.configFile + argv.config;
/**
 * Launch 2 servers
 * localhost:4000 for zimlet-iframe
 * localhost:4001 for zimlet-iframe integration in a iframe
 * localhost:4002 for documentation
 */
gulp.task('generate_iframe', function() {
    gulp.src('src/iframe_integration/*')
    .pipe(plugins.replace('ENV', argv.env))

    .pipe(plugins.replace('API_URL', configApi.apiUrl))
    .pipe(plugins.replace('API_KEY', configApi.apiKey))
    .pipe(gulp.dest("./integration"));
});
gulp.task("dev_server", ['generate_iframe'], function() {
    plugins.connect.server({
        root: "dist",
        port: "4000"
    });
    plugins.connect.server({
        root: "./integration",
        port: "4001"
    });
    plugins.connect.server({
        root: "./docs",
        port: "4002"
    });
});
