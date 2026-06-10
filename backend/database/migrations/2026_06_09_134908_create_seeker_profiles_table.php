<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('seeker_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->text('bio')->nullable();
            $table->string('skills')->nullable();
            $table->string('resume_url')->nullable();
            $table->enum('experience_level', ['fresher', 'mid', 'senior'])->default('fresher');
            $table->string('education')->nullable();
            $table->string('portfolio_url')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    { 
        Schema::dropIfExists('seeker_profiles');
    }
};
