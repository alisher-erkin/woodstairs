const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

// Очистка папки dist
function clean() {
  return del(['dist']);
}

// Компиляция SCSS → CSS
function styles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

// Копирование HTML
function html() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
}

const build = gulp.series(clean, gulp.parallel(styles, html));

exports.clean = clean;
exports.styles = styles;
exports.html = html;
exports.build = build;


