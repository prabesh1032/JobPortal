<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavedJob extends Model
{
    protected $fillable = [
        'job_id',
        'seeker_id',
    ];

    // SavedJob belongs to a job
    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    // SavedJob belongs to a seeker
    public function seeker()
    {
        return $this->belongsTo(User::class, 'seeker_id');
    }
}
