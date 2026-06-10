<?php
namespace App\Http\Controllers;

use App\Models\RecruiterProfile;
use Illuminate\Http\Request;

class RecruiterProfileController extends Controller
{
    // GET /api/recruiter-profiles
    public function index()
    {
        $profiles = RecruiterProfile::with('user')->get();
        return response()->json([
            'success' => true,
            'data' => $profiles
        ]);
    }

    // POST /api/recruiter-profiles
    public function store(Request $request)
    {
        $request->validate([
            'user_id'             => 'required|exists:users,id',
            'company_name'        => 'required|string|max:255',
            'company_logo'        => 'nullable|string',
            'company_website'     => 'nullable|string',
            'company_description' => 'nullable|string',
            'industry'            => 'nullable|string',
            'company_size'        => 'nullable|string',
        ]);

        $profile = RecruiterProfile::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Recruiter profile created successfully',
            'data'    => $profile
        ], 201);
    }

    // GET /api/recruiter-profiles/{id}
    public function show(RecruiterProfile $recruiterProfile)
    {
        return response()->json([
            'success' => true,
            'data'    => $recruiterProfile->load('user')
        ]);
    }

    // PUT /api/recruiter-profiles/{id}
    public function update(Request $request, RecruiterProfile $recruiterProfile)
    {
        $request->validate([
            'company_name'        => 'required|string|max:255',
            'company_logo'        => 'nullable|string',
            'company_website'     => 'nullable|string',
            'company_description' => 'nullable|string',
            'industry'            => 'nullable|string',
            'company_size'        => 'nullable|string',
        ]);

        $recruiterProfile->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Recruiter profile updated successfully',
            'data'    => $recruiterProfile
        ]);
    }

    // DELETE /api/recruiter-profiles/{id}
    public function destroy(RecruiterProfile $recruiterProfile)
    {
        $recruiterProfile->delete();
        return response()->json([
            'success' => true,
            'message' => 'Recruiter profile deleted successfully'
        ]);
    }
}
