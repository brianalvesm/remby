'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('./public/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function () {
  gulp.watch('./public/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch', 'sass'));