'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

sass.compiler = require('node-sass');

gulp.task('compileCSS', function () {
    return gulp.src('src/css/src/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/dst/css'))
});


gulp.task('watch', function() {
    gulp.watch('src/css/src/*.scss', ['compileCSS']);
});

