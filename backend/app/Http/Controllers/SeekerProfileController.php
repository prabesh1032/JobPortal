<?php
namespace App\Http\Controllers;

use App\Models\SeekerProfile;
use Illuminate\Http\Request;

class SeekerProfileController extends Controller
{
    // GET /api/seeker-profiles
    public function index()
    {
        $profiles = SeekerProfile::with('user')->get();
        return response()->json([
            'success' => true,
            'data' => $profiles
        ]);
    }

    // POST /api/seeker-profiles
    public function store(Request $request)
    {
        $request->validate([
            'user_id'          => 'required|exists:users,id',
            'bio'              => 'nullable|string',
            'skills'           => 'nullable|string',
            'resume_url'       => 'nullable|string',
            'experience_level' => 'nullable|in:fresher,mid,senior',
            'education'        => 'nullable|string',
            'portfolio_url'    => 'nullable|string',
        ]);

        $profile = SeekerProfile::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Seeker profile created successfully',
            'data'    => $profile
        ], 201);
    }

    // GET /api/seeker-profiles/{id}
    public function show(SeekerProfile $seekerProfile)
    {
        return response()->json([
            'success' => true,
            'data'    => $seekerProfile->load('user')
        ]);
    }

    // PUT /api/seeker-profiles/{id}
    public function update(Request $request, SeekerProfile $seekerProfile)
    {
        $request->validate([
            'bio'              => 'nullable|string',
            'skills'           => 'nullable|string',
            'resume_url'       => 'nullable|string',
            'experience_level' => 'nullable|in:fresher,mid,senior',
            'education'        => 'nullable|string',
            'portfolio_url'    => 'nullable|string',
        ]);

        $seekerProfile->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Seeker profile updated successfully',
            'data'    => $seekerProfile
        ]);
    }

    // DELETE /api/seeker-profiles/{id}
    public function destroy(SeekerProfile $seekerProfile)
    {
        $seekerProfile->delete();
        return response()->json([
            'success' => true,
            'message' => 'Seeker profile deleted successfully'
        ]);
    }
}
