<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Hash;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot()
    {
        // Here you may define how you wish users to be authenticated for your Lumen
        // application. The callback which receives the incoming request instance
        // should return either a User instance or null. You're free to obtain
        // the User instance via an API token or any other method necessary.

        $this->app['auth']->viaRequest('api', function ($request) {
            // Check if submitted API token is valid
            // Secured routes needs a X-Api-Username and X-Api-Token in the header of the request
            // containing the username and secret token
            $username = $request->header('X-Api-Username');
            $token = $request->header('X-Api-Token');

            // Obtain the user record from the database
            $dbuser = User::where('username', $username)->first();

            // Check if user is found
            if ($dbuser == null)
                return null;

            // Check if the provided token is valid
            if (Hash::check($token, $dbuser->apiKey))
                return response()->json('OK', 200);
            else
                return null;
        });
    }
}
