<?php

namespace App\Http\Controllers\Orders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Order;
use App\Orders_product;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $order = new Order();
        $order->namet = $request->namet;
        $order->numbert = $request->numbert;
        $order->numbertr = $request->numbertr;
        $order->datetr = $request->datetr;   
        $order->total = $request->total;
        $order->client_id = $request->client_id;

        if($order->save()){
            return ['result' => 'success', "mess"=>$order];
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeProducto(Request $request)
    {
        $errores = [];
        $succes = [];
        $cont = 0;
        foreach($request->medicines as $element){
            $ord_prod = new Orders_product();
            $ord_prod->order_id = $request->order_id;
            $ord_prod->product_id = $element;
            $ord_prod->cantidad = $request->cantidad[$cont];
            $cont = $cont + 1;
            array_push($succes, $ord_prod);
            if($ord_prod->save()){
                array_push($succes, $ord_prod);
            }else{
                array_push($errores, $ord_prod);
            }
        }
        return ['result' => $succes, "result1"=>$errores];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $data = [];
        $clients= \DB::table('clients')
            ->join('orders', 'orders.client_id', '=', 'clients.id')
            ->select('clients.id','clients.client_name', 'clients.client_phone', 'client_addresse', 'orders.status', 'orders.order_id', 'orders.delivery_date')
            ->get();
        foreach($clients as $client){
            $medicinas = \DB::table("orders_products")
            ->join('products', 'orders_products.product_id', '=', 'products.id')
            ->join('presentations', 'presentations.id', '=', 'products.precentation')
            ->join('labs', 'labs.id', '=', 'products.laboratory')
            ->select('products.name', 'orders_products.cantidad', 'products.description', 'products.price','presentations.name as preName','presentations.unidad', 'presentations.cantidad as preCantidad', 'labs.name as labName', 'products.warehouse')
            ->where('orders_products.order_id', $client->order_id)
            ->get();
            $datos = array("cliente" => $client, "medicamentos" => $medicinas);
            array_push($data, $datos);
        }
        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
