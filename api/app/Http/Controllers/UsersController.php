<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    // POST Function which generates a new user and token
    public function createUser(Request $request)
    {
        // Get the new username at the body of the request
        $username = $request->input('username');

        // The username should be at the body of the request
        if ($username == null)
            return response()->json($request, 400);

        // Check if the username already exists
        $dbuser = User::where('username', $username)->first();
        if ($dbuser != null)
            return response()->json('Username already in use.', 400);

        // Generate a new token
        $token = Str::random(32);

        // Add the new user to the database
        $newUser = new User();
        $newUser->username = $username;
        $newUser->apiKey = Hash::make($token);
        $newUser->active = true;
        $newUser->save();

        return response()->json(['token' => $token], 200);
    }
}