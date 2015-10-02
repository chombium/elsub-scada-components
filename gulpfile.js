var gulp   = require('gulp'),
stylus = require('gulp-stylus'),
concat = require('gulp-concat'),

paths = {
   'bower' : './bower_components',
   'assets': './assets'
};

gulp.task('styles', function(){
	return gulp.src([
	   paths.assets + '/styles/colors.styl',
	   paths.assets + '/styles/app.styl'
	])
	.pipe(stylus())
	.pipe(concat('app.css'))
	.pipe(gulp.dest('./public/css'));
})

gulp.task('scripts', function() {
	gulp.src([
	   paths.bower + '/jquery/dist/jquery.js',
	   paths.assets + '/scripts/snap.js',
	   paths.assets + '/scripts/elsubscada_*.js',
	   paths.assets + '/scripts/scada-app.js',
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./public/js'));
})


gulp.task('watch', function() {
    gulp.watch(paths.assets + '/styles/**/*.styl', ['styles']);
    gulp.watch(paths.assets + '/scripts/**/*.js', ['scripts']);
})

gulp.task('default', ['styles', 'scripts']);