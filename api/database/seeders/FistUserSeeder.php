<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class FistUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('user')->insert([
            'username' => 'firstuser',
            'apiKey' => Hash::make('lu1vYhQTEWkZsuIbxRL5n3VRfKnt0qhd'),
            'active' => true
        ]);
    }
}
