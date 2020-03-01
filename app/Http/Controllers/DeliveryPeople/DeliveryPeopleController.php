<?php

namespace App\Http\Controllers\DeliveryPeople;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Shipping;

class DeliveryPeopleController extends Controller
{
    //Funcion para traer a los repartidores 
    public function getDelivery(){
        return \DB::table('users')->where('rol', 5)->select("id", "name")->get();
    }

    //Crea una nueva orden a un mensajero
    public function store(Request $request){
        $verEnvio = \DB::table('orders')->where('order_id', $request->id_recipies)->first();
        if($verEnvio->status == 1){
            $shipping = new Shipping();
            $shipping->id_user = $request->delivery;
            $shipping->id_recipie = $request->id_recipies;
            $shipping->recipient_name = "";
            $shipping->save();
            \DB::Table('orders')->where('order_id', $request->id_recipies)->update([
                "status"=> 2
            ]);
        }
        return ['result' => 'success'];
    }

    //Retorna las ordenes asociadas a un repartidos
    public function myOrders($id){
        $data = [];
        $clients_enviar= \DB::table('orders')
            ->join('shippings', 'shippings.id_recipie', '=', 'orders.order_id')
            ->join('clients', 'clients.id', '=', 'orders.client_id')
            ->where('shippings.id_user', $id)
            ->where('orders.status', 3)
            ->select('clients.id','clients.client_name', 'clients.client_phone',  'clients.paise', 'clients.depare', 'clients.callee', 'clients.apartamentoe', 'clients.municipioe', 'clients.residenciae', 'clients.codigoe','client_addresse', 'orders.status', 'orders.order_id', 'orders.delivery_date')
            ->get();
        foreach($clients_enviar as $client){
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
        
        $clients_enviar= \DB::table('orders')
            ->join('shippings', 'shippings.id_recipie', '=', 'orders.order_id')
            ->join('clients', 'clients.id', '=', 'orders.client_id')
            ->where('shippings.id_user', $id)
            ->where('orders.status', 2)
            ->select('clients.id','clients.client_name', 'clients.client_phone','clients.paise', 'clients.depare', 'clients.callee', 'clients.apartamentoe', 'clients.municipioe', 'clients.residenciae', 'clients.codigoe', 'client_addresse', 'orders.status', 'orders.order_id', 'orders.delivery_date')
            ->get();
        foreach($clients_enviar as $client){
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
        
        $clients_enviar= \DB::table('orders')
            ->join('shippings', 'shippings.id_recipie', '=', 'orders.order_id')
            ->join('clients', 'clients.id', '=', 'orders.client_id')
            ->where('shippings.id_user', $id)
            ->where('orders.status', 4)
            ->select('clients.id','clients.client_name', 'clients.client_phone', 'clients.paise', 'clients.depare', 'clients.callee', 'clients.apartamentoe', 'clients.municipioe', 'clients.residenciae', 'clients.codigoe','client_addresse', 'orders.status', 'orders.order_id', 'orders.delivery_date')
            ->get();
        foreach($clients_enviar as $client){
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

    //cambia el estatus del envio de asignado a en proceso de envío
    public function confirmOrder(Request $request){
        \DB::table('orders')->where('order_id', $request->id_recipies)->update([
            "status" => 3
        ]);
        return ['result' => 'success'];
    }

    //Cambia el estatus del envio de proceso de envío a entregado
    public function completeOrder(Request $request){
        $order= \DB::table('orders')->where('order_id', $request->id_recipies)->first();
        $products_order = \DB::table('orders_products')->where('order_id', $request->id_recipies)->get();
        foreach($products_order as $pro_or){
            $producto = \DB::table('products')->where('id', $pro_or->product_id)->first();
            \DB::table('products')->where('id', $pro_or->product_id)->update([
                "quantity" => ($producto->quantity - $pro_or->cantidad)
            ]);
        }
        \DB::table('shippings')->where('id_recipie', $request->id_recipies)->update([
            "recipient_name"=> $request->name_recibed, "observations" => $request->observations
        ]);
        \DB::table('orders')->where('order_id', $request->id_recipies)->update([
            "status"=>$request->status,
            "delivery_date" => date("Y-m-d H:m:s")
        ]);
        return ['result' => 'success'];
    }
}
