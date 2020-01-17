<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('lastName');
            $table->string('birthname');
            $table->string('weight');
            $table->string('genre');
            $table->string('phone');
            $table->string('date')->nullable();
            $table->string('symptom')->nullable();
            $table->string('diagnosis')->nullable();
            $table->string('observations')->nullable();
            $table->string('nextAppointment')->nullable();
            $table->string('product_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
