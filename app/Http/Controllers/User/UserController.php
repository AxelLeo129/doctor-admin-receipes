<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Users_category;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Mail;
use Hash;

class UserController extends Controller
{
    
    public $successStatus = 200;


    public function sendEmail(Request $request){
        $userName = \DB::table('users')->where('id', $request->user_id)->value('name');
        Mail::send('welcome', ['request' => $request, 'userName' => $userName], function($message) use ($request){
            $message->from('pharmazone@insayd.com', 'Pharmazone.app');
            $message->to($request->email, $request->name)->subject('¡Bienvenid@ a Pharmazone.app!');
        });
    
        return "Se ha enviado el email";
    }

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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getMedics($id)
    {
        return User::where('id_visitador', $id)->get();
    }

    public function changePassword(Request $request){
        if(Hash::check($request->mypassword, Auth::user()->password)){
            $user = new User();
            $user->where('email', '=', Auth::user()->email)->update(['password' => bcrypt($request->password)]);
            return "Success";
        }else{
            return "Unauthorized";
        }
    }

    public function resetPassword(Request $request){
        return User::where('email', $request->email)->get();
    }

    public function getVisitador($id){
        return User::where('id', $id)->get();
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
            //return response()->json(['request'=>$request->all()]);
        }
        /** 
         * login api 
         * 
         * @return \Illuminate\Http\Response 
         */
        public function login(Request $request){
            if(filter_var($request->email, FILTER_VALIDATE_EMAIL)){
                if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
                    $user = Auth::user(); 
                    $success['token'] =  $user->createToken('MyApp')-> accessToken; 
                    return response()->json(['success' => $success, 'rol'=> $user->rol, 'regis'=> $user->clinicalRecord ,'id'=> $user->id], $this-> successStatus); 
                } 
                else{ 
                    return response()->json(['error'=>'Unauthoriseds'], 401); 
                }
            }else{
                if(Auth::attempt(['noCollegiate' => $request->email, 'password' => $request->password])){ 
                    $user = Auth::user(); 
                    $success['token'] =  $user->createToken('MyApp')-> accessToken; 
                    return response()->json(['success' => $success, 'rol'=> $user->rol, 'regis'=> $user->clinicalRecord ,'id'=> $user->id], $this-> successStatus); 
                } 
                else{ 
                    return response()->json(['error'=>'Unauthorised'], 401); 
                }
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

        /** 
         * details api 
         * 
         * @return \Illuminate\Http\Response 
         */ 
        public function detailsUser($id) 
        { 
            return User::where('id', $id)->get();
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

        public function update3(Request $request){
            $user = User::find($request->id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->noCollegiate = $request->noCollegiate;
            $user->rol = $request->rol;
            $user->password = bcrypt($request->password);

            if($user->save()){
                return ['result' => 'success', "mess"=>$user];
            }else{
                return ['result' => 'fail', "mess"=>$user];
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
            $user_cate = new Users_category();
            $user_cate->user_id = $request->user_id;
            $user_cate->category_id = $element;
            if($user_cate->save()){
                array_push($succes, $user_cate);
            }else{
                array_push($errores, $user_cate);
            }
        }
        return ['result' => $succes, "result1"=>$errores];
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
        $user_cate = Users_category::where('user_id',$id);

        if($user_cate->delete()){
            return ['result' => $succes];
        }else{
            return ['result' => $errores];
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
        return \DB::select("SELECT us.id, us.name, us.image, us.userName, us.clinicName, us.clinicLogo, us.clinicPhone, us.clinicAddress, us.noCollegiate, us.phone, us.birthDate, us.clinicalRecord, us.showAlerts, us.email, us.id_visitador,GROUP_CONCAT(cat.id SEPARATOR ',') categories FROM users_categories pp INNER JOIN users us ON pp.user_id=us.id INNER JOIN categories cat ON pp.category_id=cat.id WHERE us.id = $id GROUP BY us.id");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show1($id)
    {
        return User::where('id', $id)->get();
    }
}
