<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipie extends Model
{
    protected $fillable = [
        'name', 'phone', 'doctor_id', 'symptom', 
        'diagnostics', 'observations', 'nextAppointment', 'status'
    ];
}
