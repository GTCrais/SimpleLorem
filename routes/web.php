<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('fetch-sitemap', ['as' => 'fetchSitemap', 'uses' => 'PageController@sitemap']);
Route::get('/')->uses('PageController@show');
Route::match(['get', 'post'], '{segments}')->uses('PageController@show404')->where('segments', '(.*)');
