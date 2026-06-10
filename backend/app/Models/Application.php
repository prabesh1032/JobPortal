<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'job_id',
        'seeker_id',
        'cover_letter',
        'resume_url',
        'status',
    ];

    // Application belongs to a job
    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    // Application belongs to a seeker
    public function seeker()
    {
        return $this->belongsTo(User::class, 'seeker_id');
    }
}
