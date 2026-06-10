<?php

use App\Http\Controllers\ApplicationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\RecruiterProfileController;
use App\Http\Controllers\SavedJobController;
use App\Http\Controllers\SeekerProfileController;

// Default route
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Category Routes
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('categories.show');
Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('categories.update');
Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');

Route::get('/recruiter-profiles', [RecruiterProfileController::class, 'index'])->name('recruiter-profiles.index');
Route::post('/recruiter-profiles', [RecruiterProfileController::class, 'store'])->name('recruiter-profiles.store');
Route::get('/recruiter-profiles/{recruiterProfile}', [RecruiterProfileController::class, 'show'])->name('recruiter-profiles.show');
Route::put('/recruiter-profiles/{recruiterProfile}', [RecruiterProfileController::class, 'update'])->name('recruiter-profiles.update');
Route::delete('/recruiter-profiles/{recruiterProfile}', [RecruiterProfileController::class, 'destroy'])->name('recruiter-profiles.destroy');

// Seeker Profile Routes
Route::get('/seeker-profiles', [SeekerProfileController::class, 'index'])->name('seeker-profiles.index');
Route::post('/seeker-profiles', [SeekerProfileController::class, 'store'])->name('seeker-profiles.store');
Route::get('/seeker-profiles/{seekerProfile}', [SeekerProfileController::class, 'show'])->name('seeker-profiles.show');
Route::put('/seeker-profiles/{seekerProfile}', [SeekerProfileController::class, 'update'])->name('seeker-profiles.update');
Route::delete('/seeker-profiles/{seekerProfile}', [SeekerProfileController::class, 'destroy'])->name('seeker-profiles.destroy');


// Job Routes
Route::get('/jobs', [JobController::class, 'index'])->name('jobs.index');
Route::post('/jobs', [JobController::class, 'store'])->name('jobs.store');
Route::get('/jobs/{job}', [JobController::class, 'show'])->name('jobs.show');
Route::put('/jobs/{job}', [JobController::class, 'update'])->name('jobs.update');
Route::delete('/jobs/{job}', [JobController::class, 'destroy'])->name('jobs.destroy');


// Application Routes
Route::get('/applications', [ApplicationController::class, 'index'])->name('applications.index');
Route::post('/applications', [ApplicationController::class, 'store'])->name('applications.store');
Route::get('/applications/{application}', [ApplicationController::class, 'show'])->name('applications.show');
Route::put('/applications/{application}', [ApplicationController::class, 'update'])->name('applications.update');
Route::delete('/applications/{application}', [ApplicationController::class, 'destroy'])->name('applications.destroy');


// Saved Job Routes
Route::get('/saved-jobs', [SavedJobController::class, 'index'])->name('saved-jobs.index');
Route::post('/saved-jobs', [SavedJobController::class, 'store'])->name('saved-jobs.store');
Route::get('/saved-jobs/{savedJob}', [SavedJobController::class, 'show'])->name('saved-jobs.show');
Route::delete('/saved-jobs/{savedJob}', [SavedJobController::class, 'destroy'])->name('saved-jobs.destroy');
