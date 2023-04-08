<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StudentDashboardController extends Controller
{
    public function index()
    {

        return inertia('student/HomeStudent');
    }

    public function profile(Request $request)
    {

        /** just for an example, write your code here for user profile*/
        $text = "Hi " . $request->name ?: "Guest";

        return inertia('student/StudentProfile',compact('text'));
    }
}
