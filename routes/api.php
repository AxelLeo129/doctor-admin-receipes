<?php

use Illuminate\Http\Request;
//use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Route;

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
    Route::get('listUsers', "User\UserController@index");
    Route::get('details', 'User\UserController@details');
    Route::put('putUser1', 'User\UserController@update1');
    Route::put('putUser2', 'User\UserController@update2');
    //Product
    Route::get('getProducts', 'Products\ProductController@list');
    Route::post('postProducts', 'Products\ProductController@store');
    Route::get('getProduct/{id}', 'Products\ProductController@show');
    Route::get('getProduct1/{id}', 'Products\ProductController@show1');
    Route::get('deleteProduct/{id}', 'Products\ProductController@destroy');
    Route::put('putProduct', 'Products\ProductController@update');
    Route::post('postProdCate', 'Products\ProductController@storeCategory');
    Route::get('deleteProdCate/{id}', 'Products\ProductController@destroyCategory');
    //Recetas
    Route::post('postRecetas', 'Recipies\RecipieController@store');
    Route::post('postReceProd', 'Recipies\RecipieController@storeProduct');
    Route::get('getReceta/{id}', 'Recipies\RecipieController@show');
    Route::get('getRecipes', 'Recipies\RecipieController@index');
    Route::get('getReceProd/{id}', 'Recipies\RecipieController@getProduct');
    Route::get('getInfoRecipie/{id}', 'Recipies\RecipieController@getInfoRecipie');
    //Categorias
    Route::post('postCategory', 'Categories\CategoryController@store');
    Route::get('getCategories', 'Categories\CategoryController@index');
    Route::put('putCategory', 'Categories\CategoryController@update');
    Route::get('getCategory/{id}', 'Categories\CategoryController@show');
    Route::get('deleteCategory/{id}', 'Categories\CategoryController@destroy');
    //Clientes
    Route::get('getClients', 'Clients\ClientController@index');
    Route::get('getCliente', 'Clients\ClientController@show');
    Route::get('getCliente1/{id}', 'Clients\ClientController@show1');
    Route::post('postCliente', 'Clients\ClientController@store');
    Route::put('putCliente', 'Clients\ClientController@update');
    //Repartidores
    Route::get('getDelivery', 'DeliveryPeople\DeliveryPeopleController@getDelivery');
    Route::post('postShipping', 'DeliveryPeople\DeliveryPeopleController@store');
    Route::get('my-orderds/{id}', 'DeliveryPeople\DeliveryPeopleController@myOrders');
    Route::post('confirm-order', 'DeliveryPeople\DeliveryPeopleController@confirmOrder');
    Route::post('confirm-delivery', 'DeliveryPeople\DeliveryPeopleController@completeOrder');
    //Pedidos
    Route::post('postOrder', 'Orders\OrderController@store');
    Route::post('postOrderProd', 'Orders\OrderController@storeProducto');

});

Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact axel@insayd.com'], 404);
});
