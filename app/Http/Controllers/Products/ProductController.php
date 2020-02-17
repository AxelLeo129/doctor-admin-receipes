<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use App\Products_category;

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
        return \DB::select("SELECT prod.id, prod.name, prod.image, prod.description, prod.precentation ,(SELECT GROUP_CONCAT(name, '-', unidad, '-', cantidad) FROM presentations WHERE presentations.id = prod.precentation) as precentacion, prod.price, prod.laboratory, (SELECT name FROM labs WHERE labs.id = prod.laboratory) as lab, prod.warehouse, prod.quantity, prod.user_id, GROUP_CONCAT(cat.id SEPARATOR ',') categories FROM products_categories pp INNER JOIN products prod ON pp.product_id=prod.id INNER JOIN categories cat ON pp.category_id=cat.id GROUP BY prod.id");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list1()
    {
        //return Product::all();
        return \DB::select("SELECT prod.id, prod.name, prod.image, prod.description,(SELECT GROUP_CONCAT(name, '-', unidad, '-', cantidad) FROM presentations WHERE presentations.id = prod.precentation) as precentacion, (SELECT name FROM labs WHERE labs.id = prod.laboratory) as lab, prod.quantity, prod.user_id, GROUP_CONCAT(cat.id SEPARATOR ',') categories FROM products_categories pp INNER JOIN products prod ON pp.product_id=prod.id INNER JOIN categories cat ON pp.category_id=cat.id GROUP BY prod.id");
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
        //return ['result' => 'success', "mess"=>$request->categories];
        $product = new Product();
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
        }
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
        return \DB::select("SELECT prod.id, prod.name, prod.image, prod.description, prod.precentation, prod.price, prod.laboratory, prod.warehouse, prod.quantity, prod.user_id, GROUP_CONCAT(cat.id SEPARATOR ',') categories FROM products_categories pp INNER JOIN products prod ON pp.product_id=prod.id INNER JOIN categories cat ON pp.category_id=cat.id WHERE prod.id = $id GROUP BY prod.id");
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
        $product = Product::find($request->id);
        $product->name = $request->name;
        $product->image = $request->image;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->precentation = $request->precentation;
        $product->laboratory = $request->laboratory;
        $product->warehouse = $request->warehouse;
        $product->quantity = $request->quantity;
        $product->user_id = $product->user_id;


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
