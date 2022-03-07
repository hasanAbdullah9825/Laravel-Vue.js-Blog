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

use App\Http\Controllers\CategoryController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/add_category', 'CategoryController@add_category');
Route::get('/category', 'CategoryController@all_category');
Route::delete('/category/{id}', 'CategoryController@delete_category');
Route::get('/category/edit/{id}', 'CategoryController@edit_category');
Route::post('/category/update/{id}', 'CategoryController@update_category');
Route::get('/posts', 'PostController@all_post');
