<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('userName');
            $table->string('rol');
            $table->string('clinicName')->nullable();
            $table->string('clinicPhone')->nullable();
            $table->string('clinicAddress')->nullable();
            $table->string('specialties')->nullable();
            $table->integer('noCollegiate')->nullable();
            $table->integer('phone')->nullable();
            $table->string('birthDate')->nullable();
            $table->boolean('clinicalRecord')->default(false);
            $table->boolean('showAlerts')->default(true);
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        DB::statement("ALTER TABLE products ADD image  LONGBLOB");
        DB::statement("ALTER TABLE products ADD clinicLogo  LONGBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
