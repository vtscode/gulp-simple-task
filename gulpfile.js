let gulp = require('gulp')
let gulpConnect = require('gulp-connect')

let gulpClean = require('gulp-clean');
let gulpMinifyCss = require('gulp-minify-css');
let gulpConcat = require('gulp-concat');
let gulpUglify = require('gulp-uglify');
let gulpHtmlmin = require('gulp-htmlmin');

gulp.task('server',async function(){
	gulpConnect.server({
	  root : "dist",
	  livereload : true
	})
})
// task untuk minify
gulp.task('minify-css', async function () {
	gulp.src('./src/css/*.css')
			.pipe(gulpMinifyCss({
					compatibility: 'ie8'
			}))
			.pipe(gulp.dest('./dist/'))
			.pipe(gulpConnect.reload())
});

gulp.task('minify-js', async function () {
	gulp
			.src([
					'./src/js/*.js'
			])
			.pipe(gulpConcat('bundle.js'))
			.pipe(gulpUglify())
			.pipe(gulp.dest('dist'))
			.pipe(gulpConnect.reload())
});

gulp.task('minify-html', async function () {
	gulp.src('src/*.html')
			.pipe(gulpHtmlmin({
					collapseWhitespace: true
			}))
			.pipe(gulp.dest('dist'))
			.pipe(gulpConnect.reload())
});

gulp.task('watch', async function () {
	gulp.watch('./src/js/*.js', gulp.series('minify-js'));
	gulp.watch('./src/css/*.css', gulp.series('minify-css'));
	gulp.watch('./src/*.html', gulp.series('minify-html'));
});

gulp.task('default', gulp.series('watch','server'))

gulp.task('clean', function() {
  return gulp.src('dist', {
    read: false,
    allowEmpty: true
  }).pipe(gulpClean());
});

gulp.task('build', gulp.series('clean', 'minify-css', 'minify-js', 'minify-html'));
