<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeekerProfile extends Model
{
    protected $fillable = [
        'user_id',
        'bio',
        'skills',
        'resume_url',
        'experience_level',
        'education',
        'portfolio_url',
    ];

    // Relationship — seeker profile belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
