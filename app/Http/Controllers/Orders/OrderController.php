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
    public function show($id)
    {
        //
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
