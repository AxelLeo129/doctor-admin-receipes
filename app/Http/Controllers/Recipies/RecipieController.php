<?php

namespace App\Http\Controllers\Recipies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Recipie;
use App\Recipies_product;
use Illuminate\Cache\RetrievesMultipleKeys;
use Illuminate\Support\Facades\Mail;
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
        //SELECT * FROM `recipies` ORDER BY dateIssue
    }

    public function index1($id)
    {
        return \DB::select("SELECT * FROM `recipies` WHERE doctor_id = $id AND dateIssue = CURDATE()");
    }

    public function index2($id)
    {
        return \DB::select("SELECT * FROM `recipies` WHERE doctor_id = $id ORDER BY dateIssue DESC");
    }

    public function index3($status)
    {
        return \DB::select("SELECT * FROM `recipies` WHERE status = $status AND call_center = 1 AND dateIssue >= DATE_SUB(CURDATE(), INTERVAL 1 WEEK) ORDER BY dateIssue DESC");
    }

    public function index4()
    {
        return \DB::select("SELECT * FROM `recipies` WHERE status = 1 AND call_center = 1 ORDER BY dateIssue DESC");
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
        $recipe->call_center = $request->call_center;

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
        return \DB::select("SELECT reci.id, reci.phone, reci.dateIssue, reci.name, reci.doctor_id, reci.symptom, reci.diagnostics, reci.observations, reci.call_center, reci.nextAppointment, reci.status, GROUP_CONCAT(prod.id SEPARATOR ',') products FROM recipies_products pp INNER JOIN recipies reci ON pp.recipe_id=reci.id INNER JOIN products prod ON pp.product_id=prod.id WHERE reci.id = $id GROUP BY reci.id");
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
    public function update(Request $request)
    {
        $recipe = Recipie::find($request->id);
        $recipe->status = $request->status;
        if ($request->status1 == null){
            $request->status1 = '2020';
        }
        $recipe->status1 = $request->status1;
        $recipe->status2 = $request->status2;
        $recipe->reproDate = $request->reproDate;

        if($recipe->save()){
            return ['result' => 'success', "mess"=>$recipe];
        }else{
            return ['result' => 'fail', "mess"=>$recipe];
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

    //muestra los medicamentos que se le recetó al cliente
    public function getInfoRecipie($id){
        return \DB::select("SELECT recipe_id, name, dispensing, (SELECT name FROM presentations WHERE presentations.id = precentation) as presentacion FROM recipies_products INNER JOIN products ON recipies_products.product_id = products.id WHERE recipe_id = $id");
    }

    public function updateStatus(Request $request){
        $recipe = Recipie::find($request->id);
        $recipe->status = $request->status;

        if($recipe->save()){
            return ['result' => 'success', "mess"=>$recipe];
        }else{
            return ['result' => 'fail', "mess"=>$recipe];
        }
    }

    public function updateStatus1(Request $request){
        $recipe = Recipie::find($request->id);
        $recipe->status = $request->status;
        $recipe->receiver = $request->receiver;

        if($recipe->save()){
            return ['result' => 'success', "mess"=>$recipe];
        }else{
            return ['result' => 'fail', "mess"=>$recipe];
        }
    }

    public function reagendarRecipe(Request $request){
        $recipe = Recipie::find($request->id);
        $recipe->status = $request->status;
        $recipe->reproDate = $request->reproDate;
        if ($request->status1 == null){
            $request->status1 = '2020';
        }
        $recipe->status1 = $request->status1;

        if($recipe->save()){
            return ['result' => 'success', "mess"=>$recipe];
        }else{
            return ['result' => 'fail', "mess"=>$recipe];
        }
    }

    public function getMedicines($id){
        return \DB::select("SELECT recipe_id, product_id ,name, cost, dispensing, (SELECT cantidad FROM presentations WHERE presentations.id = precentation) as cantidad, (SELECT name FROM presentations WHERE presentations.id = precentation) as presentacion , (SELECT price FROM products WHERE products.id = recipies_products.product_id) as price FROM recipies_products INNER JOIN products ON recipies_products.product_id = products.id WHERE recipe_id = $id");
    }

    public function getRerecipe(){
        return \DB::select("SELECT * FROM `recipies` WHERE status2 = 1 AND call_center = 1 AND status1 >= CURRENT_TIMESTAMP () ORDER BY status1 ASC");
    }

    public function getPacientes(){
        return \DB::select("SELECT * FROM `recipies` WHERE observations != ''");
    }

    public function getPaciente($id, $id1){
        return \DB::select("SELECT * FROM `recipies` WHERE observations != '' AND id = $id AND doctor_id = $id1");
    }

    public function sendRecipe(Request $request){
        Mail::send('recipe', ['request' => $request], function($message) use ($request){
            $message->from('pharmazone@insayd.com', 'Pharmazone.app');
            $message->to($request->email, $request->name)->subject('Receta Visita de Hoy');
        });
    
        return "Receta enviada exitosamente.";
    }
}
