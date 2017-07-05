let gulp = require('gulp');

const paths = {
    local: './code/local/**/*',
    modules: './etc/modules/*',
    design: './design/frontend/base/default/**/*.{php,xml,phtml}'
}

gulp.task('local', () => {
    gulp.src([paths.local]).pipe(gulp.dest('/Users/patrickoliveras/Production/cores/magento/public/dev/app/code/local'))
});

gulp.task('modules', () => {
    gulp.src(paths.modules)
        .pipe(gulp.dest('/Users/patrickoliveras/Production/cores/magento/public/dev/app/etc/modules'));
});

gulp.task('design', () => {
    gulp.src(paths.design)
        .pipe(gulp.dest('/Users/patrickoliveras/Production/cores/magento/public/root/app/design/frontend/base/default'));
});

gulp.task('watch', () => {
    gulp.watch(paths.local, ['local']);
    gulp.watch(paths.modules, ['modules']);
    gulp.watch(paths.design, ['design']);
})

gulp.task('default', ['watch', 'modules', 'local', 'design']);
