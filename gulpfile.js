const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const { src, dest } = require("gulp");


// 1. Удаление старой папки dist
function clean() {
  return del(["dist"]);
}

// 2. Компиляция SCSS → dist/css
function styles() {
  return gulp
    .src("scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

// 3. Копирование HTML → dist/
function html() {
  return gulp.src("*.html").pipe(gulp.dest("dist"));
}

// 4. Копирование JS (если есть) → dist/js
function scripts() {
  return gulp.src("js/**/*.js").pipe(gulp.dest("dist/js"));
}

function images() {
  return src('img/**/*').pipe(dest('dist/img'));
}

function icons() {
  return src('icons/**/*').pipe(dest('dist/icons'));
}

function logo() {
  return src('logo/**/*').pipe(dest('dist/logo'));
}

// 5. Вот задача, которую вызывает Netlify: gulp build
gulp.task("build", gulp.series(clean, html, styles, scripts, images, icons, logo ));

// 6. Задача watch (для локальной разработки)
gulp.task("watch", function () {
  gulp.watch("scss/*.scss", styles);
});



