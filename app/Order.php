<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'order_id', 'nit', 'noInvoice', 'dateInvoice', 'namet', 'numbert', 'datetr', 'total', 'client_id', 'status', 'delivery_date', 'facturador_id'
    ];
}
