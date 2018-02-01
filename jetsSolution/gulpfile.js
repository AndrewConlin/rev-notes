var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var watchify    = require('watchify');
var tsify       = require('tsify');
var gutil       = require('gulp-util');

var paths = {
  pages : ['src/views/*.html']
};

var unwatchedBrowserify = browserify({
  basedir: '.',
  debug: true,
  entries: ['src/main.ts'],
  cache: {},
  packageCache: {}
}).plugin(tsify);

var watchedBrowserify = watchify(unwatchedBrowserify);

gulp.task('copy-html', function() {
  return  gulp.src(paths.pages)
              .pipe(gulp.dest('dist'));
});

function bundle(browserifyConfig) {
  return browserifyConfig
          .bundle()
          .pipe(source('bundle.js'))
          .pipe(gulp.dest('dist'));
}

gulp.task('default', ['copy-html'], function() {
  bundle(watchedBrowserify);
});

gulp.task('build', ['copy-html'], function() {
  bundle(unwatchedBrowserify);
})

watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);
