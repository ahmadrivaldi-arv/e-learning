<?php

use App\Http\Controllers\{
    Student\StudentDashboardController,
    Student\SubjectController
};
use Illuminate\Support\Facades\Route;


Route::prefix('s')->name('student.')->group(function(){

    Route::controller(StudentDashboardController::class)->group(function () {

        Route::get('', 'index')->name('dashboard');
        Route::get('profile', 'profile')->name('profile');
    });

    Route::controller(SubjectController::class)->group(function (){

        Route::get('subject','index')->name('subjects');
    });
});
