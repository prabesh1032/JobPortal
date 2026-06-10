<?php
namespace App\Http\Controllers;

use App\Models\SavedJob;
use Illuminate\Http\Request;

class SavedJobController extends Controller
{
    // GET /api/saved-jobs
    public function index()
    {
        $savedJobs = SavedJob::with(['job', 'seeker'])->latest()->get();
        return response()->json([
            'success' => true,
            'data' => $savedJobs
        ]);
    }

    // POST /api/saved-jobs
    public function store(Request $request)
    {
        $request->validate([
            'job_id'    => 'required|exists:job_listings,id',
            'seeker_id' => 'required|exists:users,id',
        ]);

        // Check if already saved
        $alreadySaved = SavedJob::where('job_id', $request->job_id)
            ->where('seeker_id', $request->seeker_id)
            ->exists();

        if ($alreadySaved) {
            return response()->json([
                'success' => false,
                'message' => 'Job already saved'
            ], 409);
        }

        $savedJob = SavedJob::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Job saved successfully',
            'data'    => $savedJob
        ], 201);
    }

    // GET /api/saved-jobs/{id}
    public function show(SavedJob $savedJob)
    {
        return response()->json([
            'success' => true,
            'data'    => $savedJob->load(['job', 'seeker'])
        ]);
    }

    // DELETE /api/saved-jobs/{id} - unsave a job
    public function destroy(SavedJob $savedJob)
    {
        $savedJob->delete();
        return response()->json([
            'success' => true,
            'message' => 'Job removed from saved list'
        ]);
    }
}
