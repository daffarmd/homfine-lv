<?php

namespace Database\Seeders;

use App\Models\Budgets;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $categories = [
            [
                'name' => 'Category 1',
                'description' => 'Description for Category 1',
            ],
            [
                'name' => 'Category 2',
                'description' => 'Description for Category 2',
            ],
            [
                'name' => 'Category 3',
                'description' => 'Description for Category 3',
            ],
        ];

        foreach ($categories as $category) {
            \App\Models\Category::create($category);
        }

        Budgets::factory(5)->create();
    }
}
