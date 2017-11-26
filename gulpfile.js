let gulp = require('gulp');
const pkg = require('./package.json');

const minifyCSS = require('gulp-clean-css');
const connect = require('gulp-connect');
const header = require('gulp-header');
const size = require('gulp-size');
const scss = require('gulp-sass');
const rename = require('gulp-rename');


const comment = `
  /**{
   * Friendly Atoms v${pkg.version}
   * Copyright 2017-2018 Sky Davis
   * Released under MIT License
   * http://getfriendlyatomscss.com
   */\r\n
`;

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('minify-css', function() {
  gulp.src('dist/friendly-atoms.css')
    .pipe(minifyCSS())
    .pipe(header(comment))
    .pipe(size())
    .pipe(size({
      gzip: true
    }))
    .pipe(rename('friendly-atoms.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('scss', function() {
  gulp.src('src/styles.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(minifyCSS({format: 'beautify'}))
    .pipe(rename('friendly-atoms.css'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/*.scss', ['scss']);
});

gulp.task('default', ['build' ]);
gulp.task('run', ['scss', 'webserver', 'watch']);
gulp.task('build', ['scss', 'minify-css']);