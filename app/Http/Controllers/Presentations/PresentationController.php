<?php

namespace App\Http\Controllers\Presentations;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Presentation;
use PhpParser\Node\Stmt\TraitUseAdaptation\Precedence;

class PresentationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Presentation::all();
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
        $pre = new Presentation();
        $pre->name = $request->name;
        $pre->unidad = $request->unidad;
        $pre->cantidad = $request->cantidad;
        if($pre->save()){
            return ['result' => 'success', "mess"=>$pre];
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
        return Presentation::where('id', $id)->get();
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
        $pre = Presentation::find($request->id);
        $pre->name = $request->name;
        $pre->unidad = $request->unidad;
        $pre->cantidad = $request->cantidad;

        if($pre->save()){
            return ['result' => 'success', "mess"=>$pre];
        }else{
            return ['result' => 'fail', "mess"=>$pre];
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
