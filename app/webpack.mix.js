// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resource/js/main.js', 'js/main.js').sourceMaps()
    .sass('resource/css/main.scss', 'css/main.css').sourceMaps()
    .setPublicPath('public').setResourceRoot('../')
    .browserSync({
        proxy: false,
        server: {
            baseDir: './'
        }
    });