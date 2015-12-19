var gulp = require('gulp');
var cache = require('gulp-cached');
var rev = require('gulp-rev');
var watch = require('gulp-watch');
var Client = require('ftp');
var fs = require('fs');

var watchFile = 'trigger';
gulp.task('default',['watch','ftp']);

gulp.task('watch',function(){
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
});

gulp.task('ftp',function(){
	setInterval(function(){
var c = new Client();
c.on('ready', function() {
	c.get(watchFile, function(err, stream) {
	  if (err) {
		  console.log(err);
	  }else{
		stream.once('close', function() { c.end(); });
		stream.pipe(fs.createWriteStream(watchFile));
	  }
	});
});
c.on('error',function(err){
	console.log(err);
});
c.connect({
	port:7002
});
},5000);
});
