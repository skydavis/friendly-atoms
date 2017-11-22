let gulp = require('gulp');
const pck = require('./package.json');

const minifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const header = require('gulp-header');
const size = require('gulp-size');
const scss = require('gulp-scss');
const rename = require('gulp-rename');


const comment = `
  /**
   * Friendly Atoms
   */
`;

gulp.task('scss', function() {
  gulp.src('src/styles.scss')
    .pipe(scss())
    .pipe(minifyCSS({format: 'beautify'}))
    .pipe(rename('friendly-atoms.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('minify-css', () => {
  gulp.src('dist/friendly-atoms.css')
    .pipe(minifyCSS())
    .pipe(rename('friendly-atoms.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['scss', 'minify-css'])

// gulp.task('minify', ['build'], function() {
//   // here minify and create friendly-atoms to .min
//   return gulp.src(['./dist/friendly-atoms.css'])
//     .pipe(minifyCSS())
//     .pipe(concat('friendly-atoms.css'))
//     .pipe(gulp.dest('./dist/'));
// });