/**
 * Created by antoniohernandez on 10/11/16.
 */




var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browser = require('browser-sync').create();

concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
//gulp.task('default')
/*
 * Configuración de las tareas 'demo'
 */
gulp.task('templatechallenge', function () {
    gulp.src('js/*.js')
        .pipe(concat('compilation.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
});
gulp.task('sass', function () {
    sass('./sass/*.sass',{style:'compressed'})
        .on('error', sass.logError)
        .pipe(gulp.dest('build/css'));
});

gulp.task('sass:watch', function () {
    browser.init({
       server:""
    });
    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('./js/*.js', ['templatechallenge']);

});
