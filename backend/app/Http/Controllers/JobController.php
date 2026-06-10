<?php
namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    // GET /api/jobs
    public function index()
    {
        $jobs = Job::with(['recruiter', 'category'])->where('is_active', true)->latest()->get();
        return response()->json([
            'success' => true,
            'data' => $jobs
        ]);
    }

    // POST /api/jobs
    public function store(Request $request)
    {
        $request->validate([
            'recruiter_id'    => 'required|exists:users,id',
            'category_id'     => 'required|exists:categories,id',
            'title'           => 'required|string|max:255',
            'description'     => 'required|string',
            'salary_min'      => 'nullable|string',
            'salary_max'      => 'nullable|string',
            'location'        => 'required|string',
            'type'            => 'required|in:full-time,part-time,contract',
            'skills_required' => 'nullable|string',
            'deadline'        => 'nullable|date',
            'is_active'       => 'nullable|boolean',
            'is_featured'     => 'nullable|boolean',
        ]);

        $job = Job::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Job created successfully',
            'data'    => $job
        ], 201);
    }

    // GET /api/jobs/{id}
    public function show(Job $job)
    {
        return response()->json([
            'success' => true,
            'data'    => $job->load(['recruiter', 'category'])
        ]);
    }

    // PUT /api/jobs/{id}
    public function update(Request $request, Job $job)
    {
        $request->validate([
            'title'           => 'required|string|max:255',
            'description'     => 'required|string',
            'salary_min'      => 'nullable|string',
            'salary_max'      => 'nullable|string',
            'location'        => 'required|string',
            'type'            => 'required|in:full-time,part-time,contract',
            'skills_required' => 'nullable|string',
            'deadline'        => 'nullable|date',
            'is_active'       => 'nullable|boolean',
            'is_featured'     => 'nullable|boolean',
        ]);

        $job->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Job updated successfully',
            'data'    => $job
        ]);
    }

    // DELETE /api/jobs/{id}
    public function destroy(Job $job)
    {
        $job->delete();
        return response()->json([
            'success' => true,
            'message' => 'Job deleted successfully'
        ]);
    }
}
