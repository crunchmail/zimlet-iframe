var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-if': 'gulpif',
        'gulp-angular-gettext': 'gettext',
        'gulp-tag-version': 'tag_version'
    }
});
var Karma = require('karma').Server;
var paths = require('../gulp.config.json');
var argv = require('yargs')
.default('env', 'local')
.default('config', '')
.argv;
var folderE2E = argv.file ? argv.file : '**/*';

/**
 * Task end to end
 */
gulp.task('e2e', function(done) {
    gulp.src([paths.e2e + folderE2E + ".e2e.js"])
    .pipe(plugins.angularProtractor({
        configFile: "protractor.conf.js",
        'autoStartStopServer': true
    })).on('error', function(e) {
        console.log(e);
    })
    .on('end', done);
});

gulp.task('test', function() {
    gulp.start('e2e');
});
