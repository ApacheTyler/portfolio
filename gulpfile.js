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

/**Testing Utilities*/
//Karma
var TestServer = require('karma').Server;

gulp.task('default', ['watch', 'server']);
gulp.task('tdd-workflow', ['watch-tdd']);

gulp.task('server', function(){
  DevServer.start();
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(sassSrc, ['sass']);
  gulp.watch(jsSrc, ['javascript']);
});

gulp.task('watch-tdd', function () {
   gulp.watch(jsSrc, ['tdd']); 
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

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new TestServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new TestServer({
    configFile: __dirname + '/karma.conf.js'
  }, function () {
      done();
  }).start();
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
