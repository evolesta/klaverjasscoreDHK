<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

// Secured routes
$router->group(['middleware' => 'auth'], function () use ($router) {

    $router->post('/adduser', 'UsersController@createUser');    

    $router->get('/boom', 'BoomController@list');
    $router->get('/boom/{id}', 'BoomController@show');
    $router->post('/boom', 'BoomController@create');
    $router->delete('/boom/{id}', 'BoomController@remove');
});