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
			'services': path.resolve(__dirname, 'resources/js/services'),
			//'helpers': path.resolve(__dirname, 'uniapp/src/resources/assets/js/helpers'),
			//'mixins': path.resolve(__dirname, 'uniapp/src/resources/assets/js/mixins')
		}
	}
});

mix.js('resources/js/App.js', 'public/js/app.js')
	.extract()
	/*.autoload({
		//jquery: ['$', 'window.jQuery', 'jQuery'],
		lodash: ['window._']
	})*/
	.stylus('resources/css/app.styl', 'public/css')
	.styles([
		'resources/css/vendor/bootstrap.min.css',
		'resources/css/vendor/font-awesome.min.css',
		//'resources/assets/css/animate.css'
	], 'public/css/vendor.css');
