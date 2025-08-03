const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");

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
  return src('src/img/**/*').pipe(dest('dist/img'));
}

// 5. Вот задача, которую вызывает Netlify: gulp build
gulp.task("build", gulp.series(clean, html, styles, scripts, images ));

// 6. Задача watch (для локальной разработки)
gulp.task("watch", function () {
  gulp.watch("scss/*.scss", styles);
});



