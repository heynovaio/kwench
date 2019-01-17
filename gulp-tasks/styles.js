var project = require('./_project.js');
var gulp    = require('gulp');
var sass    = require("gulp-sass");


/*
  Compile SCSS files to CSS
*/
gulp.task('styles', function() {
  return gulp.src(project.buildSrc + '/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(project.buildDest+ '/css'));
});

gulp.task('fonts', function() {
  return gulp.src(project.buildSrc + '/fonts/*')
    .pipe(gulp.dest(project.buildDest+ '/fonts'));
});


 // .pipe(replace('../fonts', 'assets/fonts'))
