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
Route::post('forgotPassword', 'User\UserController@resetPassword');
Route::get('pdf', function () {
    $pdf = App::make('dompdf.wrapper');

    $pdf->loadview('recipe');

    return $pdf->stream();

});

Route::group(['middleware' => 'auth:api'], function(){
    //User
    Route::get('listUsers', "User\UserController@index");
    Route::get('details', 'User\UserController@details');
    Route::put('putUser1', 'User\UserController@update1');
    Route::put('putUser2', 'User\UserController@update2');
    Route::put('putUser3', 'User\UserController@update3');
    Route::get('getUser1/{id}', 'User\UserController@show');
    Route::get('getUser2/{id}', 'User\UserController@show1');
    Route::get('getVisitador1/{id}', 'User\UserController@getVisitador');
    Route::post('resetPassword', 'User\UserController@changePassword');
    //Visitador
    Route::get('getVisitador/{id}', "User\UserController@getMedics");
    Route::any('register1', 'User\UserController@register');
    Route::get('getUser/{id}', 'User\UserController@detailsUser');
    Route::get('deleteUserCate/{id}', 'User\UserController@destroyCategory');
    Route::any('postUserCate', 'User\UserController@storeCategory');
    Route::post('enviar', 'User\UserController@sendEmail');
    //Product
    Route::get('getProducts', 'Products\ProductController@list');
    Route::get('getProducts1', 'Products\ProductController@list1');
    Route::post('postProducts', 'Products\ProductController@store');
    Route::post('postProducts1', 'Products\ProductController@store1');
    Route::get('getProduct/{id}', 'Products\ProductController@show');
    Route::get('getProduct1/{id}', 'Products\ProductController@show1');
    Route::get('deleteProduct/{id}', 'Products\ProductController@destroy');
    Route::post('putProduct', 'Products\ProductController@update');
    Route::post('postProdCate', 'Products\ProductController@storeCategory');
    Route::get('deleteProdCate/{id}', 'Products\ProductController@destroyCategory');
    //Recetas
    Route::post('postRecetas', 'Recipies\RecipieController@store');
    Route::post('postReceProd', 'Recipies\RecipieController@storeProduct');
    Route::get('getReceta/{id}', 'Recipies\RecipieController@show');
    Route::get('getRecipes', 'Recipies\RecipieController@index');
    Route::get('getReceProd/{id}', 'Recipies\RecipieController@getProduct');
    Route::get('getInfoRecipie/{id}', 'Recipies\RecipieController@getInfoRecipie');
    Route::put('changeStatus', 'Recipies\RecipieController@updateStatus');
    Route::get('getMedicines/{id}', 'Recipies\RecipieController@getMedicines');
    Route::put('putReceSta', 'Recipies\RecipieController@update');
    Route::get('getRerecipes', 'Recipies\RecipieController@getRerecipe');
    Route::get('getPacientes', 'Recipies\RecipieController@getPacientes');
    Route::get('getPaciente/{id}/{id1}', 'Recipies\RecipieController@getPaciente');
    Route::post('sendRecipe', 'Recipies\RecipieController@sendRecipe');
    //Categorias
    Route::post('postCategory', 'Categories\CategoryController@store');
    Route::get('getCategories', 'Categories\CategoryController@index');
    Route::put('putCategory', 'Categories\CategoryController@update');
    Route::get('getCategory/{id}', 'Categories\CategoryController@show');
    Route::get('deleteCategory/{id}', 'Categories\CategoryController@destroy');
    //Clientes
    Route::get('getClients', 'Clients\ClientController@index');
    Route::get('getCliente', 'Orders\OrderController@show');
    Route::get('getClientess', 'Orders\OrderController@show1');
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
    Route::post('putOrder', 'Orders\OrderController@update');
    //Roles
    Route::get('getRoles', 'Roles\RolController@index');
    Route::post('postRol', 'Roles\RolController@store');
    Route::get('getRol/{id}', 'Roles\RolController@show');
    Route::put('putRol', 'Roles\RolController@update');
    //Laboratorios
    Route::get('getLabs', 'Labs\LabController@index');
    Route::post('postLab', 'Labs\LabController@store');
    Route::get('getLab/{id}', 'Labs\LabController@show');
    Route::put('putLab', 'Labs\LabController@update');
    //Presentación
    Route::get('getPres', 'Presentations\PresentationController@index');
    Route::post('postPre', 'Presentations\PresentationController@store');
    Route::get('getPre/{id}', 'Presentations\PresentationController@show');
    Route::put('putPre', 'Presentations\PresentationController@update');
    //Transacciones-Comisiones
    Route::get('getComiProd/{id_producto}/{id_medico}/{id_cliente}', 'Transactions\TransactionController@index');
    Route::post('postTransaction', 'Transactions\TransactionController@store');
    Route::put('putTransaction', 'Transactions\TransactionController@update');
    Route::get('getTransactions/{id}', 'Transactions\TransactionController@show');
});

Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact axel@insayd.com'], 404);
});
