<?php

use Illuminate\Database\Seeder;
// use App\Tag;
// use App\Post;
// use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(App\Post::class, 10)->create();
        factory(App\Category::class, 10)->create();
        factory(App\User::class, 10)->create();

        // factory(App\Post::class, 10)->create();
        // factory(App\Category::class, 10)->create();
        // factory(App\User::class, 10)->create();
    }
}
