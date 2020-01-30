<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('login', 'User\UserController@login');
Route::any('register', 'User\UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
    //User
    Route::get('details', 'User\UserController@details');
    Route::put('putUser1', 'User\UserController@update1');
    Route::put('putUser2', 'User\UserController@update2');
    //Product
    Route::get('getProducts', 'Products\ProductController@list');
    Route::post('postProducts', 'Products\ProductController@store');
    Route::get('getProduct/{id}', 'Products\ProductController@show');
    Route::get('deleteProduct/{id}', 'Products\ProductController@destroy');
    Route::put('putProduct', 'Products\ProductController@update');
    Route::post('postProdCate', 'Products\ProductController@storeCategory');
    //Recetas
    Route::post('postRecetas', 'Recipies\RecipieController@store');
    Route::post('postReceProd', 'Recipies\RecipieController@storeProduct');
    Route::get('getReceta/{id}', 'Recipies\RecipieController@show');
    Route::get('getRecipes', 'Recipies\RecipieController@index');
    //Categorias
    Route::post('postCategory', 'Categories\CategoryController@store');
    Route::get('getCategories', 'Categories\CategoryController@index');
    Route::put('putCategory', 'Categories\CategoryController@update');
    Route::get('getCategory/{id}', 'Categories\CategoryController@show');
    Route::get('deleteCategory/{id}', 'Categories\CategoryController@destroy');
});
