<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Boom;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class BoomController extends Controller
{
    // GET function to get all boom
    public function list()
    {
        return Boom::all();
    }
    
    public function show($id)
    {
        return Boom::find($id);
    }

    // POST function to submit a new boom
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'data' => 'required'
        ]);

        // Add the boom to the database
        $boom = new Boom();
        $boom->username = $request->header('X-Api-Username');
        $boom->submitted = date('Y-m-d H:i:s');
        $boom->name = $request->input('name');
        $boom->description = $request->input('description');
        $boom->data = $request->input('data');
        $boom->save();

        return response()->json($boom, 200);
    }

    // DELETE a boom
    public function remove($id)
    {
        return Boom::destroy($id);
    }
}