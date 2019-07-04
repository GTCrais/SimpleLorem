const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications();

mix.webpackConfig({
	resolve: {
		alias: {
			'services': path.resolve(__dirname, 'resources/js/services')
		}
	}
});

mix.js('resources/js/App.js', 'public/js/app.js')
	.extract()
	.stylus('resources/css/app.styl', 'public/css')
	.styles([
		'resources/css/vendor/bootstrap.min.css',
		'resources/css/vendor/font-awesome.min.css'
	], 'public/css/vendor.css');
