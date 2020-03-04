<?php

namespace App\Http\Controllers\Transactions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Transaction;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id_producto, $id_medico, $id_cliente)
    {
        return \DB::select("SELECT MAX(numero_compra_medico) AS numero_compra_medico, id_producto, fecha_compra FROM transactions WHERE id_producto = $id_producto AND id_medico = $id_medico AND id_cliente = $id_cliente");
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
        $errores = [];
        $succes = [];
        $cont = 0;
        foreach($request->idsProductos as $element){
            $transaction = new Transaction();
            $transaction->origen = $request->origenes[$cont];
            $transaction->id_producto = $element;
            $transaction->nombre_producto = $request->namesProductos[$cont];
            $transaction->orden_id = $request->orden_id;
            $transaction->id_cliente = $request->id_cliente;
            $transaction->fecha_compra = $request->fecha_compra;
            $transaction->cantidad = $request->cantidadesProductos[$cont];
            $transaction->precio_facturacion = $request->precio;
            $transaction->porcentaje_iva = $request->fecha_compra;
            $transaction->ingreso_neto = $request->ingresosIva[$cont];
            $transaction->iva = $request->ivas[$cont];
            $transaction->forma_pago = $request->forma_pago;
            $transaction->porcentaje_tc = $request->porcentaje_tc;
            $transaction->costo = $request->costsProductos[$cont];
            $transaction->margen_bruto = $request->margenes[$cont];
            $transaction->numero_compra_medico = $request->numeroCompra[$cont];
            $transaction->id_medico = $request->id_medico;
            $transaction->porcent_comi_med = $request->porcent_comi_med[$cont];
            
            if($transaction->save()){
                array_push($succes, $transaction);
                $cont = $cont + 1;
            }else{
                array_push($errores, $transaction);
                $cont = $cont + 1;
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
        //
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
}
