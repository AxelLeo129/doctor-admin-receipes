<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class UserController extends Controller
{
    
    public $successStatus = 200;


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /** 
         * Register api 
         * 
         * @return \Illuminate\Http\Response 
         */ 
        public function register(Request $request) 
        { 
            $validator = Validator::make($request->all(), [ 
                'name' => 'required', 
                'userName' => 'required',
                'email' => 'required|email', 
                'password' => 'required', 
                'c_password' => 'required|same:password', 
            ]);
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors(), 'status'=>400], 400);            
            }
            //return response()->json(['success'=>$request->name]); 
            $input = $request->all(); 
            $input['password'] = bcrypt($input['password']); 
            $user = User::create($input); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            $success['name'] =  $user->name;
            return response()->json(['success'=>$success], $this-> successStatus); 
        }
        /** 
         * login api 
         * 
         * @return \Illuminate\Http\Response 
         */
        public function login(){ 
            if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
                $user = Auth::user(); 
                $success['token'] =  $user->createToken('MyApp')-> accessToken; 
                return response()->json(['success' => $success, 'rol'=> $user->rol, 'id'=> $user->id], $this-> successStatus); 
            } 
            else{ 
                return response()->json(['error'=>'Unauthoriseds'], 401); 
            } 
        }
        /** 
         * details api 
         * 
         * @return \Illuminate\Http\Response 
         */ 
        public function details() 
        { 
            $user = Auth::user(); 
            return response()->json(['success' => $user], $this-> successStatus); 
        }


        public function update1(Request $request){
            $user = User::find($request->id);
            $user->name = $request->name;
            $user->image = $request->image;
            $user->userName = $request->userName;
            $user->noCollegiate = $request->noCollegiate;
            $user->phone = $request->phone;
            $user->email = $request->email;
            $user->birthDate = $request->birthDate;
            $user->clinicalRecord = $request->clinicalRecord;
            $user->showAlerts = $request->showAlerts;
            //return ['result' => 'success', "mess"=>$user];
            if($user->save()){
                return ['result' => 'success', "mess"=>$user];
            }else{
                return ['result' => 'fail', "mess"=>$user];
            }
        }

        public function update2(Request $request){
            $user = User::find($request->id);
            $user->clinicName = $request->clinicName;
            $user->clinicPhone = $request->clinicPhone;
            $user->clinicLogo = $request->clinicLogo;
            $user->clinicAddress = $request->clinicAddress;
            $user->specialties = $request->specialties;

            if($user->save()){
                return ['result' => 'success', "mess"=>$user];
            }else{
                return ['result' => 'fail', "mess"=>$user];
            }
        }

}
