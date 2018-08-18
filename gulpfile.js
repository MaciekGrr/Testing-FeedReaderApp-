var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');

// gulp.task('default', function(){
//console.log('Hello Gulp!');
//});

gulp.task('default',['styles', 'lint'], function(){ 
	gulp.watch('sass/**/*.scss',['styles']); 
	gulp.watch('js/**/*.js', ['lint']);

});

gulp.task('styles', function(){
	gulp.src('sass/**/*.scss') // szukamy plików w folderze sass lub potencjalnym podfolderze z rozszerzeniem .scss
		.pipe(sass().on('error', sass.logError)) // takes the destination that the plug provides - it converts sass to proper css  SASS => CSS
												 // .on('error', sass.logError) ten dodatek na wypadek błędu nie przerywa konwersji pliku tylko zapisuje co nie tak SASS => +PREFIX
		.pipe(autoprefixer({						
			browsers: ['last 2 versions']
		}))								
		.pipe(gulp.dest('./css')) // we save in css folder 
		.pipe(browserSync.stream());
});

browserSync.init({
     server: "./"  });
browserSync.stream(); 


gulp.watch('./index.html').on('change', browserSync.reload); 


// const {src, task} = require('gulp');
 
gulp.task('lint', () => {
    return gulp.src(['scripts/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

/* skopiuj pliki do folderu dist:

gulp.task('copy-html', function() {
	gulp.src('./index.html')
		.pipe(gulp.dest('./dist'))
});

gulp.task('copy-images', function() {
	gulp.src('img/*')
		.pipe(gulp.dest('dist/img'))
});
*/