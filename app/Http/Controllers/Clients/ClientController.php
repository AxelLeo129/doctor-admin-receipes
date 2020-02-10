<?php

namespace App\Http\Controllers\Clients;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Client;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::all();
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
        $client = new Client();
        $client->client_name = $request->client_name;
        $client->client_nit = $request->client_nit;
        $client->client_phone = $request->client_phone;
        $client->client_genre = $request->client_genre;
        $client->client_email = $request->client_email;
        $client->birthdate = $request->birthdate;
        $client->paisf = $request->paisf;
        $client->deparf = $request->deparf;
        $client->callef = $request->callef;
        $client->apartamentof = $request->apartamentof;
        $client->municipiof = $request->municipiof;
        $client->residenciaf = $request->residenciaf;
        $client->codigof = $request->codigof;
        $client->telefonof = $request->telefonof;
        $client->paise = $request->paise;
        $client->depare = $request->depare;
        $client->callee = $request->callee;
        $client->apartamentoe = $request->apartamentoe;
        $client->municipioe = $request->municipioe;
        $client->residenciae = $request->residenciae;
        $client->codigoe = $request->codigoe;
        $client->telefonoe = $request->telefonoe;
        
        if($client->save()){
            return ['result' => 'success', "mess"=>$client];
        }
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
            ->join('recipies', 'clients.id_recipies', '=', 'recipies.id')
            ->select('clients.client_id','clients.client_name', 'clients.client_phone', 'client_addressf', 'recipies.status', 'clients.id_recipies')
            ->get();
        foreach($clients as $client){
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


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show1($id)
    {
        return Client::where('client_phone', $id)->get();
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
    public function update(Request $request)
    {
        $client = Client::find($request->id);
        $client->client_name = $request->client_name;
        $client->client_nit = $request->client_nit;
        $client->client_phone = $request->client_phone;
        $client->client_genre = $request->client_genre;
        $client->client_email = $request->client_email;
        $client->birthdate = $request->birthdate;
        $client->paisf = $request->paisf;
        $client->deparf = $request->deparf;
        $client->callef = $request->callef;
        $client->apartamentof = $request->apartamentof;
        $client->municipiof = $request->municipiof;
        $client->residenciaf = $request->residenciaf;
        $client->codigof = $request->codigof;
        $client->telefonof = $request->telefonof;
        $client->paise = $request->paise;
        $client->depare = $request->depare;
        $client->callee = $request->callee;
        $client->apartamentoe = $request->apartamentoe;
        $client->municipioe = $request->municipioe;
        $client->residenciae = $request->residenciae;
        $client->codigoe = $request->codigoe;
        $client->telefonoe = $request->telefonoe;
        
        if($client->save()){
            return ['result' => 'success', "mess"=>$client];
        }
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
