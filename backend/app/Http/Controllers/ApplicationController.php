<?php
namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    // GET /api/applications
    public function index()
    {
        $applications = Application::with(['job', 'seeker'])->latest()->get();
        return response()->json([
            'success' => true,
            'data' => $applications
        ]);
    }

    // POST /api/applications
    public function store(Request $request)
    {
        $request->validate([
            'job_id'       => 'required|exists:job_listings,id',
            'seeker_id'    => 'required|exists:users,id',
            'cover_letter' => 'nullable|string',
            'resume_url'   => 'nullable|string',
        ]);

        // Check if already applied
        $alreadyApplied = Application::where('job_id', $request->job_id)
            ->where('seeker_id', $request->seeker_id)
            ->exists();

        if ($alreadyApplied) {
            return response()->json([
                'success' => false,
                'message' => 'You have already applied for this job'
            ], 409);
        }

        $application = Application::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Application submitted successfully',
            'data'    => $application
        ], 201);
    }

    // GET /api/applications/{id}
    public function show(Application $application)
    {
        return response()->json([
            'success' => true,
            'data'    => $application->load(['job', 'seeker'])
        ]);
    }

    // PUT /api/applications/{id} - recruiter updates status
    public function update(Request $request, Application $application)
    {
        $request->validate([
            'status' => 'required|in:pending,reviewed,accepted,rejected',
        ]);

        $application->update([
            'status' => $request->status
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Application status updated successfully',
            'data'    => $application
        ]);
    }

    // DELETE /api/applications/{id}
    public function destroy(Application $application)
    {
        $application->delete();
        return response()->json([
            'success' => true,
            'message' => 'Application deleted successfully'
        ]);
    }
} 
