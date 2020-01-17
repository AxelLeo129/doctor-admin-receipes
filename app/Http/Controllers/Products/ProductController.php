<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use App\Patient;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        return Product::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $patient = new Patient();
        $patient->name = $request->name;
        $patient->lastName = $request->lastName;
        $patient->genre = $request->genre;
        $patient->phone = $request->phone;
        $patient->medicinas = $request->medicinas;
        if($patient->save()){
            return ['result' => 'success', "mess"=>$patient];
        }else{
            return ['result' => 'success', "mess"=>$patient];
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product->name = $request->name;
        $product->image = $request->image;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->precentation = $request->precentation;
        $product->category = $request->category;
        $product->laboratory = $request->laboratory;
        $product->warehouse = $request->warehouse;
        $product->quantity = $request->quantity;
        if($product->save()){
            return ['result' => 'success', "mess"=>$product];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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
        $product->category = $request->category;
        $product->laboratory = $request->laboratory;
        $product->warehouse = $request->warehouse;
        $product->quantity = $request->quantity;

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
}
