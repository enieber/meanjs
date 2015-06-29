var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var minCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('browser-sync', function() {
	vrowserSysnc.init({
	  server: {
		baseDir:"./"
	   }
	});
});

gulp.task('min-css', function() {
return gulp.src(['src/css/*.css']).pipe(minCss({compatibility: 'ie8'})).pipe(gulp.dest('build/css'));
});
gulp.task('scripts', function() {
return gulp.src(['src/js/**/*.js']).pipe(uglify()).pipe(gulp.dest('build/js'));});

gulp.task('watch', function() {
gulp.watch('src/js/**/*.js', function(event) {
  gutil.log('File '+event.path+' was '+event.type+', running tasks..');
  gulp.run('scripts');
});
gulp.watch('src/css/*.css', function(event) {
  gutil.log('File '+event.path+' was '+event.type+', running tasks..');
  gulp.run('min-css');	
});
});
