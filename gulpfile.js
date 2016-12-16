var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-if': 'gulpif',
        'gulp-angular-gettext': 'gettext',
        'gulp-tag-version': 'tag_version'
    }
});
var requireDir = require('require-dir');
var argv = require('yargs')
.default('env', 'local')
.default('config', '')
.argv;
var RevAll = require('gulp-rev-all');
var paths = require('./gulp.config.json');
var dist = paths.dist + argv.env + '/';
var cdn = paths.cdn + argv.env + '/';
var local = argv.env == 'local' ? true : false;

/**
 * Load gulp tasks
 */
requireDir('./gulp-tasks');

/**
 * Build application
 */
gulp.task('release', ['views', 'browserify', 'assets', 'translations', 'bowerJsComponents', 'docs'], function () {
    var revAll = new RevAll({
        dontRenameFile: [/^\/favicon.ico$/g, '/entrypoint.html', /^\/lang\/.*\/template.json$/g],
        dontSearchFile: ['/entrypoint.html']
    });

    return gulp.src(dist + '/**')
        .pipe(plugins.gulpif(!local, revAll.revision()))
        .pipe(plugins.gulpif(!local, gulp.dest(cdn)))
        .pipe(plugins.gulpif(!local, revAll.manifestFile({
            debug: true
        })))
        .pipe(plugins.gulpif(!local, gulp.dest(cdn)))
        .pipe(plugins.gulpif(!local, plugins.notify({ message: 'Build complete.' })));
});

/**
 * Default task, launch on gulp
 */
gulp.task('default', ['clean_all'], function() {
    if (local) {
        gulp.start('dev_server');
        gulp.start('watch');
    }
});
