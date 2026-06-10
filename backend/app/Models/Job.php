<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $table = 'job_listings';

    protected $fillable = [
        'recruiter_id',
        'category_id',
        'title',
        'description',
        'salary_min',
        'salary_max',
        'location',
        'type',
        'skills_required',
        'deadline',
        'is_active',
        'is_featured',
    ];

    // Job belongs to a recruiter
    public function recruiter()
    {
        return $this->belongsTo(User::class, 'recruiter_id');
    }

    // Job belongs to a category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Job has many applications
    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}
