<?php

use Facade\Ignition\QueryRecorder\Query;
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
// Route::get('reporteGeneral', function () {

//     $datos = DB::select("select o.user_id as id, u.name as nombre, r.name as rol, count(o.user_id) total, concat(year(o.created_at),'-',MONTH(o.created_at),'-',day(o.created_at)) as fecha from oauth_access_tokens o, users u, roles r where o.user_id = u.id and r.id = u.rol and u.id not in (1,2,3,4,5,6,7,8,30,31,55) group by 1,5");

//     $pdf = App::make('dompdf.wrapper');

//     $pdf->loadview('general', ['datos' => $datos]);

//     return $pdf->stream();

// });

Route::group(['middleware' => 'auth:api'], function(){
    //User
    Route::get('listUsers', "User\UserController@index");
    Route::get('getMedicos', "User\UserController@index1");
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
    Route::get('getReceMed/{id}', 'Recipies\RecipieController@index1');
    Route::get('getReceMed1/{id}', 'Recipies\RecipieController@index2');
    Route::get('getReceSta/{status}', 'Recipies\RecipieController@index3');
    Route::get('getReceNew', 'Recipies\RecipieController@index4');
    Route::get('getInfoRecipie/{id}', 'Recipies\RecipieController@getInfoRecipie');
    Route::put('changeStatus', 'Recipies\RecipieController@updateStatus');
    Route::put('changeStatus1', 'Recipies\RecipieController@updateStatus1');
    Route::put('reagendar', 'Recipies\RecipieController@reagendarRecipe');
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
    Route::get('getTransactions', 'Transactions\TransactionController@getTransactions');
    //Reportes
    Route::get('reporteGeneral', function () {

        $datos = DB::select("select o.user_id as id, u.name as nombre, r.name as rol, count(o.user_id) total, concat(year(o.created_at),'-',MONTH(o.created_at),'-',day(o.created_at)) as fecha from oauth_access_tokens o, users u, roles r where o.user_id = u.id and r.id = u.rol and u.id not in (1,2,3,4,5,6,7,8,30,31,55) group by 1,5");
    
        $pdf = App::make('dompdf.wrapper');
    
        $pdf->loadview('general', ['datos' => $datos]);
    
        return $pdf->stream();
    
    });

    Route::get('reporteIngresos/{query}', function ($query) {

        $datos = DB::select($query);
    
        $pdf = App::make('dompdf.wrapper');

        $total = 0;

        foreach($datos as $dato){
            if($dato->valor == null){
                $dato->valor = 0;
            }
            $total = $total + $dato->valor;
        }
    
        $pdf->loadview('ingresos', ['datos' => $datos, 'total' => $total]);
    
        return $pdf->stream();
    
    });
});

Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact axel@insayd.com'], 404);
});
