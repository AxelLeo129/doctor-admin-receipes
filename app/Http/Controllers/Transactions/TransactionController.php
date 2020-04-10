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

    public function getTransactions(){
        return \DB::select("SELECT nombre_producto, fecha_compra, CONCAT('No. ',orden_id) AS orden_id, CONCAT('Q',precio_facturacion) AS precio_facturacion, CONCAT('Q',ingreso_neto) AS ingreso_neto, CONCAT('Q',iva) AS iva, CONCAT('Q',valor_comision_med) AS valor_comision_med, CONCAT('Q',valor_comision_vistador) AS valor_comision_vistador, CONCAT('Q',valor_comi_callcenter) AS valor_comi_callcenter, CONCAT('Q',valor_comision_mensajero) AS valor_comision_mensajero, a.name AS medico, b.name AS visitador, c.name AS callcenter, d.name AS mensajero FROM transactions as tra LEFT JOIN users as a ON tra.id_medico = a.id LEFT JOIN users as b ON tra.id_visitador = b.id LEFT JOIN users as c ON tra.id_callcenter = c.id LEFT JOIN users as d ON tra.id_mensajero = d.id");
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
            $transaction->precio_facturacion = $request->precios[$cont];
            $transaction->porcentaje_iva = $request->porcentaje_iva;
            $transaction->ingreso_neto = $request->ingresosIva[$cont];
            $transaction->iva = $request->ivas[$cont];
            $transaction->forma_pago = $request->forma_pago;
            $transaction->porcetaje_tc = $request->porcentaje_tc;
            $transaction->tc = $request->tc[$cont];
            $transaction->costo = $request->costsProductos[$cont];
            $transaction->margen_bruto = $request->margenes[$cont];
            $transaction->numero_compra_medico = $request->numeroCompra[$cont];
            $transaction->id_medico = $request->id_medico;
            $transaction->porcent_comi_med = $request->porcent_comi_med;
            $transaction->valor_comision_med = $request->valor_comi_med[$cont];
            $transaction->id_visitador = $transaction->id_visitador;
            $transaction->porcent_comi_vist = $request->porcent_comi_vist;
            $transaction->valor_comision_vistador = $request->valor_comision_visitador[$cont];
            $transaction->id_callcenter = $request->id_callcenter;
            $transaction->porcent_comi_callcenter = $request->porcent_comi_callcenter;
            $transaction->valor_comi_callcenter = $request->valor_comision_callcenter[$cont];
            $transaction->porcent_comi_mensajero = $request->porcent_comi_mensajero;
            $transaction->valor_comision_mensajero = $request->valor_comision_mensajero[$cont];
            $transaction->total_comisiones = $request->total_comisiones[$cont];
            $transaction->saldo_margen = $request->saldo_margen[$cont];
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
        return \DB::select("SELECT * FROM `transactions` WHERE orden_id = $id");
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
        foreach($request->ids as $element){   
            \DB::table('transactions')->where('orden_id', $request->order_id)->where('id', $element)->update(['id_mensajero' => $request->id_mensajero]);
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
