var gulp = require('gulp');
var cache = require('gulp-cached');
var rev = require('gulp-rev');
var watch = require('gulp-watch');
var watchFile = 'trigger';
gulp.task('default',['watch2']);
// 監控每一次的變動,但新增刪除沒用,尤其是新增後的
// 檔案變動也沒反應
gulp.task('watch',function(){
    gulp.watch(watchFile,['lint']);
});

// 改用gulp-watch後就可以正確的監控所有的變動
gulp.task('watch2',function(){
  gulp.src(watchFile)
  .pipe(watch(watchFile))
  .pipe(cache('linting'))
  .pipe(rev())
  .pipe(gulp.dest('history'));
});

gulp.task('lint',function(){
  gulp.src(watchFile)
  .pipe(cache('linting')) // 內容有變時才會往下
  .pipe(rev()) // 檔案加上hash
  .pipe(gulp.dest('history')); // 備份記錄
})
