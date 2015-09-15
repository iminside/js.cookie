var gulp   = require( "gulp" ),
    babel  = require( "gulp-babel" );


gulp.task( "build", function(){
  return gulp.src( "./src/**/*.js" )
    .pipe( babel() )
    .pipe( gulp.dest( "./dst" ) );
});
