<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('posts', PostController::class);
Route::get('posts/{id}', function ($id) {
    return Inertia::render('index', [
        'post' => Post::findOrFail($id)
    ]);
});
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
