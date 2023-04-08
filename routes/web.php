<?php

use App\Http\Controllers\Student\StudentDashboardController;
use Illuminate\Support\Facades\Route;



Route::prefix('s')->group(function(){

    Route::controller(StudentDashboardController::class)->name('student.')->group(function () {

        Route::get('', 'index')->name('dashboard');
        Route::get('profile', 'profile')->name('profile');
    });
});
