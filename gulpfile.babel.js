import gulp   from 'gulp'
import pump   from 'pump'
import uglify from 'gulp-uglify'
import babel  from 'gulp-babel'

const src  = gulp.src('src/**/*')
const dist = gulp.dest('dist')
const lib = gulp.dest('common')

// gulp.task('default', gulp.series('build', () => {}))

gulp.task('build', () =>
  pump([
    src,
    babel(),
    lib,
  ])
)
gulp.task('uglify', () =>
  pump([
    src,
    babel(),
    uglify(),
    dist,
  ])
)
