<?php

use Illuminate\Support\Facades\File;

Route::get('/{any}', function () {
    $path = public_path('frontend-dist/index.html');

    if (File::exists($path)) {
        return File::get($path);
    }

    abort(404);
})->where('any', '.*');
