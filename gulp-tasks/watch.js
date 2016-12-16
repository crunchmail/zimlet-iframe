var gulp = require('gulp');
var paths = require('../gulp.config.json');
var argv = require('yargs')
.default('env', 'local')
.default('config', '')
.argv;
var local = argv.env == 'local' ? true : false;

gulp.task('watch', function() {

    /*
     * TODO Review watch paths
     */
     if (local) {
         // Watch templates files
         gulp.watch([
             paths.frontendDirectives + '**/*.html'
         ], ['views']);

        // Watch .less files
        gulp.watch([
            paths.lessFiles + '*.less',
            paths.frontendAssets + 'less/*.less'
        ], ['assets']);

        gulp.watch([
            paths.frontendDirectives + '**/*.js',
            paths.docs.install,
            paths.docs.api
        ], ['docs']);

        //Watchers for translate files
        gulp.watch('src/app/commons/languages/*', ['translateFiles']);
    }

});
