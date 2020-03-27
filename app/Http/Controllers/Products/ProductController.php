<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use App\Products_category;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        //return Product::all();
        //return \DB::select("SELECT prod.id, prod.name, prod.description, prod.precentation ,(SELECT GROUP_CONCAT(name, '-', unidad, '-', cantidad) FROM presentations WHERE presentations.id = prod.precentation) as precentacion, prod.price, prod.laboratory, (SELECT name FROM labs WHERE labs.id = prod.laboratory) as lab, prod.warehouse, prod.quantity, prod.user_id, GROUP_CONCAT(cat.id SEPARATOR ',') categories FROM products_categories pp INNER JOIN products prod ON pp.product_id=prod.id INNER JOIN categories cat ON pp.category_id=cat.id GROUP BY prod.id");
        return \DB::select("SELECT prod.id, prod.name, prod.description, prod.precentation ,(SELECT name FROM presentations WHERE presentations.id = prod.precentation) as precentacion, prod.price, prod.laboratory, (SELECT name FROM labs WHERE labs.id = prod.laboratory) as lab, prod.warehouse, prod.quantity, prod.user_id, prod.cost ,GROUP_CONCAT(cat.id SEPARATOR ',') categories FROM products_categories pp INNER JOIN products prod ON pp.product_id=prod.id INNER JOIN categories cat ON pp.category_id=cat.id GROUP BY prod.id");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list1()
    {
        //return Product::all();
        //return \DB::select("SELECT prod.id, prod.name, prod.description,(SELECT GROUP_CONCAT(name, '-', unidad, '-', cantidad) FROM presentations WHERE presentations.id = prod.precentation) as precentacion, prod.laboratory, prod.quantity, prod.user_id, GROUP_CONCAT(cat.id SEPARATOR ',') categories FROM products_categories pp INNER JOIN products prod ON pp.product_id=prod.id INNER JOIN categories cat ON pp.category_id=cat.id GROUP BY prod.id");
        return \DB::select("SELECT products.id, products.name, products.status, products.img_url, products.description,(SELECT name FROM presentations WHERE presentations.id = products.precentation) as precentacion, products.laboratory, products.quantity, products.user_id FROM products");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
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
        //return ['result' => 'success', "mess"=>$request->all()];
        $imageName = date("d").date("m").date('Y').date("H").date("i").date("s").'.png';
        $product = new Product();
        $product->name = $request->name;
        $product->img_url = $imageName;
        $product->cost = $request->cost;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->precentation = $request->precentation;
        $product->laboratory = $request->laboratory;
        $product->warehouse = $request->warehouse;
        $product->quantity = $request->quantity;
        $product->user_id = $request->user_id;
        $product->status = $request->status;
        $product->regulated = $request->regulated;
        $product->observations = $request->observations;
        $request->image->storeAs('productos', $imageName);
        if($product->save()){
            return ['result' => 'success', "mess"=>$product->id];
        }
    }


    public function store1(Request $request)
    {
        if($request->hasFile('image')){
            //$request->image->
            $request->image->storeAs(
                'productos', 'hola.png'
            );
            return 'hola';
        }else{
            return "fail";
        }
        
        /*$data['image'] = $request->image->store('');
        return ['result' => 'success', "mess"=>$request->all()];*/

        /*$product = new Product();
        $product->name = $request->name;
        $product->image = $request->image;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->precentation = $request->precentation;
        $product->laboratory = $request->laboratory;
        $product->warehouse = $request->warehouse;
        $product->quantity = $request->quantity;
        $product->user_id = $request->user_id;
        if($product->save()){
            return ['result' => 'success', "mess"=>$product->id];
        }*/
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCategory(Request $request)
    {
        $errores = [];
        $succes = [];
        foreach($request->categories as $element){
            $prod_cate = new Products_category();
            $prod_cate->product_id = $request->product_id;
            $prod_cate->category_id = $element;
            if($prod_cate->save()){
                array_push($succes, $prod_cate);
            }else{
                array_push($errores, $prod_cate);
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
        return \DB::select("SELECT prod.id, prod.name, prod.cost, prod.img_url, prod.description, prod.precentation, prod.observations, prod.status, prod.regulated, prod.price, prod.laboratory, prod.warehouse, prod.quantity, prod.user_id, GROUP_CONCAT(cat.id SEPARATOR ',') categories FROM products_categories pp INNER JOIN products prod ON pp.product_id=prod.id INNER JOIN categories cat ON pp.category_id=cat.id WHERE prod.id = $id GROUP BY prod.id");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show1($id)
    {
        return Product::where('id', $id)->get();
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
        //return ['result' => 'success', "mess"=>$request->all()];
        $product = Product::find($request->id);
        $product->name = $request->name;
        $product->img_url = $request->imageName;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->cost = $request->cost;
        $product->precentation = $request->precentation;
        $product->laboratory = $request->laboratory;
        $product->warehouse = $request->warehouse;
        $product->quantity = $request->quantity;
        $product->user_id = $product->user_id;
        $product->status = $request->status;
        $product->regulated = $request->regulated;
        $product->observations = $request->observations;
        if($request->hasFile('image')){
            $request->image->storeAs('productos', $request->imageName);
        }
        if($product->save()){
            return ['result' => 'success', "mess"=>$product];
        }else{
            return ['result' => 'fail', "mess"=>$product];
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
        $product = Product::find($id);
        $image_path = "images/productos/" . $product->img_url;
        Storage::delete($image_path);
        if($product->delete()){
            return ['result' => 'success'];
        } else {
            return ['result' => 'fail', "mess"=>$product];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroyCategory($id)
    {
        $errores = 'Error';
        $succes = 'Exelente';
        $prod_cate = Products_category::where('product_id',$id);

        if($prod_cate->delete()){
            return ['result' => $succes];
        }else{
            return ['result' => $errores];
        }
    }
}
