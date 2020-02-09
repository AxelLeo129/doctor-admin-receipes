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

    public function store(Request $request){
        $shipping = new Shipping();
        $shipping->id_user = $request->delivery;
        $shipping->id_recipie = $request->id_recipies;
        $shipping->recipient_name = "";
        $shipping->save();
        return ['result' => 'success'];
    }
}
