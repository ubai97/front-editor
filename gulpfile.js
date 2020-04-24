/* Configuration of entry points and paths for all tasks */
const config = {
    styles: {
        src: 'src/scss/main.scss',
        dest: 'assets/css',
        file: 'bfee.css',
        watchSrc: 'src/scss/*.scss',
    },
    editorStyles: {
        src: 'src/scss/editor-style.scss',
        dest: 'assets/css',
        file: 'bfe-editor-style.css',
        watchSrc: 'src/scss/**/*.scss',
    },
    blocksEditorStyles: {
        src: 'src/scss/block/*.scss',
        dest: 'assets/css/block',
        file: 'bfe-block-editor-style.css',
        watchSrc: 'src/scss/**/*.scss',
    },

    scripts: {
        src: [
            'src/js/vendors/*.js',
            'src/js/inc/*.js',
            'src/js/*.js',
        ],
        dest: 'assets/js',
        file: 'bfee-editor.js'
    },

    gutenbergBlock: {
        src: [
            'src/js/vendors/*.js',
            'src/js/inc/*.js',
            'src/js/block/*.js',
        ],
        dest: 'assets/js/block',
        file: 'bfee-block.js'
    }
};

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');

const postcss = require('gulp-postcss');
const gulpStylelint = require('gulp-stylelint');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
// post-css plugin to solve object-fit polyfill requirements
const objectFitImages = require('postcss-object-fit-images');
const loadSVG = require('postcss-inline-svg');

// use these if you need less support instead, also run `npm install --save-dev gulp-less gulp-less-glob`
// const lessGlob = require('gulp-less-glob');
// const less = require('gulp-less');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default; // we use ES6 compatible minifier for future :)

/* Used to work with @import '~bootstrap' tilda notation meaning it should lookup at node_modules via includePaths */
const sassTildeImporter = (url, prev, done) => {
    return (url[0] === '~') ? { file: url.substr(1) } : null;
};


/*
*  Our tasks definitions go below
*/

gulp.task('styles', () => {
    return gulp.src(config.styles.src)
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sassGlob())
        .pipe(sass({
            includePaths: ['node_modules'],
            importer: sassTildeImporter
        }))
        .pipe(concat(config.styles.file))
        .pipe(postcss([
            loadSVG({
                path: 'src/icons'
            }),
            objectFitImages,
            autoprefixer,
            cssnano
        ]))
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest(config.styles.dest));
});

gulp.task('editor-styles', () => {
    return gulp.src(config.editorStyles.src)
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sassGlob())
        .pipe(sass({
            includePaths: ['node_modules'],
            importer: sassTildeImporter
        }))
        .pipe(concat(config.editorStyles.file))
        .pipe(postcss([
            objectFitImages,
            autoprefixer,
            cssnano
        ]))
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest(config.editorStyles.dest));
});

gulp.task('blocks-editor-styles', () => {
    return gulp.src(config.blocksEditorStyles.src)
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sassGlob())
        .pipe(sass({
            includePaths: ['node_modules'],
            importer: sassTildeImporter
        }))
        // .pipe(gulpStylelint({
        //     failAfterError: true,
        //     reporters: [
        //         {formatter: 'verbose', console: true},
        //     ],
        //     // debug: true
        // }))
        .pipe(concat(config.blocksEditorStyles.file))
        .pipe(postcss([
            objectFitImages,
            autoprefixer,
            cssnano
        ]))
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest(config.blocksEditorStyles.dest));
});


gulp.task('scripts', () => {
    return gulp.src(config.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(babel({
            presets: ['@babel/env'],
            sourceType: 'unambiguous',
        }))
        .pipe(concat(config.scripts.file))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.scripts.dest));
});

/**
 * guthenberg block js converting jsx to 
 */
gulp.task('gutenberg-block', function () {
    return gulp.src(config.gutenbergBlock.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            plugins: ['@babel/plugin-transform-react-jsx'],
            presets: ['@babel/env'],
            sourceType: 'unambiguous',
        }))
        .pipe(concat(config.gutenbergBlock.file))
        //.pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.gutenbergBlock.dest))
});


/* watch tasks definitions */
gulp.task('watch:styles', () => gulp.watch(config.styles.watchSrc, gulp.series('styles')));
gulp.task('watch:editor-styles', () => gulp.watch(config.editorStyles.watchSrc, gulp.series('editor-styles')));
gulp.task('watch:blocks-editor-styles', () => gulp.watch(config.blocksEditorStyles.watchSrc, gulp.series('blocks-editor-styles')));
gulp.task('watch:scripts', () => gulp.watch(config.scripts.src, gulp.series('scripts')));
gulp.task('watch:gutenberg-block', () => gulp.watch(config.gutenbergBlock.src, gulp.series('gutenberg-block')));


gulp.task('watch',
    gulp.series(
        gulp.parallel('watch:styles', 'watch:editor-styles', 'watch:blocks-editor-styles', 'watch:scripts', 'watch:gutenberg-block')
    )
);


gulp.task('default', gulp.parallel('styles', 'editor-styles', 'blocks-editor-styles', 'scripts', 'gutenberg-block'));