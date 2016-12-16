var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-if': 'gulpif',
        'gulp-angular-gettext': 'gettext',
        'gulp-tag-version': 'tag_version'
    }
});
var paths = require('../gulp.config.json');

/**
 * Generate a documentation
 */
gulp.task('docs', function () {
    var options = {
        startPage: '/install',
        html5Mode: false
    };
    return plugins.ngdocs.sections({
        api: {
            glob: [
                paths.frontendDirectives + '**/*.js',
                paths.docs.api
            ],
            api: true,
            title: 'API Documentation'
        },
        install: {
            glob: paths.docs.install,
            title: "Installation"
        }
    }).pipe(plugins.ngdocs.process(options))
    .pipe(gulp.dest('./docs'));
});

gulp.task('deploy', ['docs'], function() {
  return gulp.src('./docs/**/*')
    .pipe(plugins.ghPages());
});
