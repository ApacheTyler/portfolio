/* global __dirname */
var gulp = require('gulp');

/**Dev Server **/
var server = require('gulp-live-server');
var DevServer = server('server.js',undefined, false);
//livereload
var livereload = require('gulp-livereload');

/** Plug-ins **/
//Sass
var sass = require('gulp-sass');
var sassGlobbing = require('gulp-css-globbing');

/**Source Directories**/
//Sass
var sassSrc = ['./atomic/*.scss', './atomic/**/*.scss'];
var cssDest = './public/styles/';
//Javascript
var jsSrc = ['public/js/*.js', 'public/modules/**/*.js', 'public/modules/**/*.html']

//Coffee
/**Do I want to use coffee? **/

gulp.task('default', ['watch', 'server']);

gulp.task('server', function(){
  DevServer.start();
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(sassSrc, ['sass']);
  gulp.watch(jsSrc, ['javascript']);
});

gulp.task('javascript', function(){
  gulp.src(jsSrc)
    .pipe(livereload());
});

gulp.task('sass', function () {
  console.log('Sass compile -- ' + logTime())
  gulp.src(sassSrc)
    .pipe(sassGlobbing({ //Enables use of wild cards in sass imports
        extensions: ['.scss'] // Configure it to use SCSS files
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());
});

//Build utilities

var logTime = function(){
  var timestamp = Date.now();
  var date = new Date(timestamp);
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  return hours + ':' + minutes + ':' + seconds;
}
