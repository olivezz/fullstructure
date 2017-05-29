module.exports = function () {

    var config = {

        portNumber: 9000,
        indexFile: './app/index.html',
        jsFiles: [
            'app/src/**/*.js',
            'app/src/**/*.spec.js'
        ],
        filesToInject: [
            './app/src/shared/**/*.module.js',
            './app/src/shared/**/*.js',
            './app/app.Module.js',
            './app/app.EndPoints.js',
            './app/app.Routes.js',
            './app/app.OnRun.js',
            './app/src/core/**/*.js',
            './app/src/**/*.js',
            '!./app/src/**/*.spec.js',
            './app/assets/css/main.css'
        ],
        SASS: [
            /* first 3 files must in order */
            './app/sass/variables.scss',
            './app/sass/fonts.scss',
            './app/sass/base.scss',
            './app/sass/animation.scss',
            './app/src/**/*.scss'
        ],
        CSS: './app/assets/css/*.css',
        fontsToCopy: ['./app/bower_components/bootstrap/dist/fonts/**/*'],
        path: {
            css: './app/assets/css/',
            html: './app/src/**/*.html',
            development: './app',
            production: './build',
            images: './app/assets/images/**/*.+(png|jpg|gif|svg)',
            imagesProd: './build/assets/images',
            json: './app/src/**/*.json',
            font: './build/assets/fonts'
        },
        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './app/bower_components/'
        }
    };

    config.getWiredepDefaultOptions = function () {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory
        };
    };
    return config;
};