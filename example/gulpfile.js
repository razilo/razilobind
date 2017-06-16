var gulp = require('gulp');
var rename = require("gulp-rename");
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

/**************************************************/
/* Build into distributable, development versions */
/**************************************************/

gulp.task('build', ['build-razilobind']);

gulp.task('build-razilobind', function() {
	gulp.src('./index.es6.js')
		.pipe(browserify({transform: ['babelify']}))
		.on('error', function(err) { console.log(err); util.beep(); this.emit('end'); })
		.pipe(rename('index.js'))
		.pipe(gulp.dest('./build/'))
		.pipe(rename('index.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/'));
});
