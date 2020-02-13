<?php

namespace App\Http\Controllers\Recipies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Recipie;
use App\Recipies_product;
use Illuminate\Support\Facades\DB;

class RecipieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Recipie::all();
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
        $recipe = new Recipie();
        $recipe->name = $request->name;
        $recipe->phone = $request->phone;
        $recipe->doctor_id = $request->doctor_id;
        $recipe->symptom = $request->symptom;
        $recipe->diagnostics = $request->diagnostics;
        $recipe->observations = $request->observations;
        $recipe->nextAppointment = $request->nextAppointment;
        $recipe->status = $request->status;
        $recipe->dateIssue = $request->dateIssue;

        if($recipe->save()){
            return ['result' => 'success', "mess"=>$recipe->id];
        }else{
            return ['result' => 'success', "mess"=>$recipe];
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeProduct(Request $request)
    {
        $errores = [];
        $succes = [];
        $cont = 0;
        foreach($request->medicines as $element){
            $reci_prod = new Recipies_product();
            $reci_prod->recipe_id = $request->recipe_id;
            $reci_prod->product_id = $element;
            $reci_prod->dispensing = $request->dispensing[$cont];
            $cont = $cont + 1;
            array_push($succes, $reci_prod);
            if($reci_prod->save()){
                array_push($succes, $reci_prod);
            }else{
                array_push($errores, $reci_prod);
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
        return \DB::select("SELECT reci.id, reci.phone, reci.name, reci.doctor_id, reci.symptom, reci.diagnostics, reci.observations, reci.nextAppointment, reci.status, GROUP_CONCAT(prod.id SEPARATOR ',') products FROM recipies_products pp INNER JOIN recipies reci ON pp.recipe_id=reci.id INNER JOIN products prod ON pp.product_id=prod.id WHERE reci.id = $id GROUP BY reci.id");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getProduct($id)
    {
        return \DB::select("SELECT * FROM recipies_products WHERE recipe_id = $id");
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

    //muestra los medicamentos que se le recetó al cliente
    public function getInfoRecipie($id){
        return \DB::table('recipies_products')->where('recipe_id', $id)->get();
    }
}
