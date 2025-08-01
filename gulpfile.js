var gulp = require("gulp");
var sass = require("gulp-sass")(require("node-sass"));
var del = require("del");

// Очистка dist
gulp.task("clean", function () {
  return del(["dist"]);
});

// Компиляция SCSS в dist/css
gulp.task("sass", function () {
  return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css")); // ⬅️ Сохраняем в dist
});

// Копирование HTML (если есть)
gulp.task("html", function () {
  return gulp.src("*.html").pipe(gulp.dest("dist"));
});

// Копирование JS (если есть)
gulp.task("js", function () {
  return gulp.src("js/*.js").pipe(gulp.dest("dist/js"));
});

// Наблюдение за SCSS
gulp.task("watch", function () {
  gulp.watch("scss/*.scss", gulp.series(["sass"]));
});

// Финальная сборка
gulp.task("build", gulp.series("clean", gulp.parallel("sass", "html", "js")));
