<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'avatar',
        'phone',
        'location',
        'is_active',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password'          => 'hashed',
            'is_active'         => 'boolean',
        ];
    }

    // User has one recruiter profile
    public function recruiterProfile()
    {
        return $this->hasOne(RecruiterProfile::class);
    }

    // User has one seeker profile
    public function seekerProfile()
    {
        return $this->hasOne(SeekerProfile::class);
    }

    // User has many job listings (as recruiter)
    public function jobs()
    {
        return $this->hasMany(Job::class, 'recruiter_id');
    }

    // User has many applications (as seeker)
    public function applications()
    {
        return $this->hasMany(Application::class, 'seeker_id');
    }

    // User has many saved jobs (as seeker)
    public function savedJobs()
    {
        return $this->hasMany(SavedJob::class, 'seeker_id');
    }
}
