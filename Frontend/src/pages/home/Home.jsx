import { ArrowRight, Star, Briefcase } from "lucide-react";
import { jobs, categories, testimonials } from "../../data/dummyData";
import Button from "../../components/Button";
import HeroSection from "./Hero";

// ── JobCard ──────────────────────────────────────────────────────
const typeBadgeColor = {
  "Full-time": "bg-blue-50 text-blue-700 border-blue-200",
  "Part-time": "bg-amber-50 text-amber-700 border-amber-200",
  "Contract":  "bg-green-50 text-green-700 border-green-200",
};

const JobCard = ({ job }) => (
  <div className={`bg-white rounded-2xl border p-5 flex flex-col gap-4 hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-200 ${job.featured ? "border-blue-200 ring-1 ring-blue-100" : "border-gray-200"}`}>
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
             style={{ backgroundColor: job.logoColor }}>
          {job.logo}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-[15px] leading-tight">{job.title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{job.company}</p>
        </div>
      </div>
      {job.featured && (
        <span className="text-[10px] font-bold bg-blue-600 text-white px-2.5 py-1 rounded-full flex-shrink-0">FEATURED</span>
      )}
    </div>
    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{job.description}</p>
    <div className="flex flex-wrap gap-2">
      {job.skills.map((s) => (
        <span key={s} className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{s}</span>
      ))}
    </div>
    <div className="flex items-center justify-between pt-1 border-t border-gray-100">
      <div className="flex items-center gap-3 text-xs text-gray-400">
        <span>{job.location}</span>
        <span>{job.postedDate}</span>
        <span>{job.applicants} applied</span>
      </div>
      <span className={`text-xs font-semibold border px-2.5 py-1 rounded-full ${typeBadgeColor[job.type]}`}>{job.type}</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm font-bold text-gray-900">{job.salary}</span>
      <Button variant="primary">Apply Now <ArrowRight size={13} /></Button>
    </div>
  </div>
);

// ── CategoryCard ─────────────────────────────────────────────────
const iconMap = {
  code:     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  pen:      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  trending: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  box:      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
  bar:      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  wifi:     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
};

const CategoryCard = ({ cat }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group">
    <div className="w-11 h-11 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 transition-colors flex-shrink-0">
      {iconMap[cat.icon]}
    </div>
    <div>
      <p className="font-bold text-gray-900 text-[15px]">{cat.label}</p>
      <p className="text-sm text-gray-400">{cat.count} open roles</p>
    </div>
    <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-blue-500 transition-colors" />
  </div>
);

// ── TestimonialCard ───────────────────────────────────────────────
const TestimonialCard = ({ t }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">"{t.text}"</p>
    <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
           style={{ backgroundColor: t.avatarColor }}>
        {t.avatar}
      </div>
      <div>
        <p className="text-sm font-bold text-gray-900">{t.name}</p>
        <p className="text-xs text-gray-400">{t.role}</p>
      </div>
    </div>
  </div>
);

// ── Home Page ─────────────────────────────────────────────────────
const Home = () => {
  const featuredJobs = jobs.filter((j) => j.featured);
  const latestJobs   = jobs.slice(0, 6);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/*  Using HeroSection component */}
      <HeroSection />

      {/* Browse by Category */}
      <section className="max-w-6xl mx-auto px-7 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Browse by Category</h2>
            <p className="text-gray-400 text-sm mt-1">Find the role that matches your skillset</p>
          </div>
          <a href="/jobs" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 no-underline">
            View all <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => <CategoryCard key={cat.label} cat={cat} />)}
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="max-w-6xl mx-auto px-7 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Featured Jobs</h2>
            <p className="text-gray-400 text-sm mt-1">Hand-picked opportunities from top companies</p>
          </div>
          <a href="/jobs" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 no-underline">
            View all <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {featuredJobs.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-7 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Latest Jobs</h2>
              <p className="text-gray-400 text-sm mt-1">Fresh listings updated daily</p>
            </div>
            <a href="/jobs" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 no-underline">
              View all <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {latestJobs.map((job) => <JobCard key={job.id} job={job} />)}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="black">
              <Briefcase size={15} /> Browse All Jobs <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-7 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">What People Say</h2>
          <p className="text-gray-400 text-sm mt-1">Real stories from people who found jobs on HireNest</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-7 pb-16">
        <div className="bg-gray-900 rounded-3xl px-8 py-14 flex flex-col items-center text-center gap-5">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">For Recruiters</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Hiring great talent?<br />
            <span className="text-blue-400">Post a job on HireNest</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Reach thousands of qualified candidates. Post your first job free and start getting applications today.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Button variant="primary">Post a Job <ArrowRight size={14} /></Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;