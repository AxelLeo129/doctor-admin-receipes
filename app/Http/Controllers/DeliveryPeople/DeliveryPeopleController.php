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
        $verEnvio = \DB::table('recipies')->where('id', $request->id_recipies)->first();
        if($verEnvio->status == 1){
            $shipping = new Shipping();
            $shipping->id_user = $request->delivery;
            $shipping->id_recipie = $request->id_recipies;
            $shipping->recipient_name = "";
            $shipping->save();
            \DB::Table('recipies')->where('id', $request->id_recipies)->update([
                "status"=> 2
            ]);
        }
        return ['result' => 'success'];
    }

    //Retorna las ordenes asociadas a un repartidos
    public function myOrders($id){
        $data = [];
        $clients_enviar= \DB::table('recipies')
            ->join('shippings', 'shippings.id_recipie', '=', 'recipies.id')
            ->join('clients', 'clients.id_recipies', '=', 'recipies.id')
            ->where('shippings.id_user', $id)
            ->where('recipies.status', 3)
            ->select('clients.client_id','clients.client_name', 'clients.client_phone', 'client_addressf', 'recipies.status', 'clients.id_recipies')
            ->get();
        foreach($clients_enviar as $client){
            $medicinas = \DB::table("recipies_products")
            ->join('products', 'recipies_products.product_id', '=', 'products.id')
            ->select('products.name', 'recipies_products.dispensing')
            ->where('recipies_products.recipe_id', $client->id_recipies)
            ->get();
            $datos = array("cliente" => $client, "medicamentos" => $medicinas);
            array_push($data, $datos);
        }

        $clients_asignado= \DB::table('recipies')
            ->join('shippings', 'shippings.id_recipie', '=', 'recipies.id')
            ->join('clients', 'clients.id_recipies', '=', 'recipies.id')
            ->where('shippings.id_user', $id)
            ->where('recipies.status', 2)
            ->select('clients.client_id','clients.client_name', 'clients.client_phone', 'client_addressf', 'recipies.status', 'clients.id_recipies')
            ->get();
        foreach($clients_asignado as $client){
            $medicinas = \DB::table("recipies_products")
            ->join('products', 'recipies_products.product_id', '=', 'products.id')
            ->select('products.name', 'recipies_products.dispensing')
            ->where('recipies_products.recipe_id', $client->id_recipies)
            ->get();
            $datos = array("cliente" => $client, "medicamentos" => $medicinas);
            array_push($data, $datos);
        }

        $clients_complete= \DB::table('recipies')
            ->join('shippings', 'shippings.id_recipie', '=', 'recipies.id')
            ->join('clients', 'clients.id_recipies', '=', 'recipies.id')
            ->where('shippings.id_user', $id)
            ->where('recipies.status', 4)
            ->select('clients.client_id','clients.client_name', 'clients.client_phone', 'client_addressf', 'recipies.status', 'clients.id_recipies')
            ->get();
        foreach($clients_complete as $client){
            $medicinas = \DB::table("recipies_products")
            ->join('products', 'recipies_products.product_id', '=', 'products.id')
            ->select('products.name', 'recipies_products.dispensing')
            ->where('recipies_products.recipe_id', $client->id_recipies)
            ->get();
            $datos = array("cliente" => $client, "medicamentos" => $medicinas);
            array_push($data, $datos);
        }
        return $data;
    }

    //cambia el estatus del envio de asignado a en proceso de envío
    public function confirmOrder(Request $request){
        \DB::table('recipies')->where('id', $request->id_recipies)->update([
            "status" => 3
        ]);
        return ['result' => 'success'];
    }

    //Cambia el estatus del envio de proceso de envío a entregado
    public function completeOrder(Request $request){
        \DB::table('shippings')->where('id_recipie', $request->id_recipies)->update([
            "recipient_name"=> $request->name_recibed
        ]);
        \DB::table('recipies')->where('id', $request->id_recipies)->update([
            "status"=>4
        ]);
        return ['result' => 'success'];
    }
}
