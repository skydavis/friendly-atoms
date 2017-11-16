let gulp = require('gulp');
const pck = require('./package.json');

const minifyCSS = require('gulp-clean-css');

gulp.task('default', function() {
// Here add code
});

gulp.task('build', function() {
  // here return the group of .scss files
});

gulp.task('minify', ['build'], function() {
  // here minify and create friendly-atoms to .min
  return gulp.src(["./dist/friendly-atoms.css"])
    .pipe(minifyCSS())
    .pipe(concat("friendly-atoms.css"))
    .pipe(gulp.dest('./dist/'));
});