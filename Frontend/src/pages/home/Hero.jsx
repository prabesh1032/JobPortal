import { Search, MapPin, CheckCircle } from "lucide-react";
import Button from "../../components/Button";

const popularTags = ["React Developer", "UI/UX Designer", "Node.js", "Remote", "Full Stack"];

const stats = [
  { num: "12k+", label: "Live Jobs" },
  { num: "4k+",  label: "Companies" },
  { num: "98%",  label: "Success Rate" },
];

const companies = ["Microsoft", "Stripe", "Notion", "Figma", "GitHub"];

const HeroSection = () => {
  return (
    <section className="bg-[#f8faff] w-full">
      <div className="max-w-4xl mx-auto px-7 py-20 flex flex-col items-center text-center">

        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-7">
          <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle size={11} color="white" strokeWidth={3} />
          </span>
          <span className="text-sm font-semibold text-blue-600">Over 1,200 new jobs added this week</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
          Find Your{" "}
          <span className="text-blue-600">Dream Job</span>
          <br />
          Faster Than Ever Before
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-500 max-w-lg leading-relaxed mb-9">
          Connect with top companies hiring right now. Search thousands of jobs,
          apply in one click, and land your next opportunity.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl flex items-center px-5 py-2 gap-3 mb-4 focus-within:border-blue-500 transition-colors">
          <Search size={18} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Job title, skills or company..."
            className="flex-1 border-none outline-none text-base text-gray-900 placeholder-gray-400 bg-transparent"
          />
          <div className="w-px h-6 bg-gray-200 flex-shrink-0" />
          <div className="flex items-center gap-2 flex-shrink-0">
            <MapPin size={15} className="text-gray-400" />
            <select className="border-none outline-none text-sm font-medium text-gray-700 bg-transparent cursor-pointer">
              <option>All Locations</option>
              <option>Remote</option>
              <option>Kathmandu</option>
              <option>New York</option>
              <option>Bangalore</option>
            </select>
          </div>
          <Button variant="primary">
            <Search size={14} /> Search Jobs
          </Button>
        </div>

        {/* Popular Tags */}
        <div className="flex items-center flex-wrap gap-2 justify-center mb-14">
          <span className="text-sm text-gray-400 font-medium">Popular:</span>
          {popularTags.map((tag) => (
            <a key={tag} href="#"
              className="bg-white border border-gray-200 rounded-full px-4 py-1 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all no-underline">
              {tag}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 w-full max-w-lg border border-gray-200 rounded-2xl overflow-hidden divide-x divide-gray-200">
          {stats.map(({ num, label }) => (
            <div key={label} className="bg-white py-5 flex flex-col items-center gap-1">
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {num.replace(/[k+%]/g, '')}<span className="text-blue-600">{num.match(/[k+%]+/)?.[0]}</span>
              </span>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Trusted by teams at</span>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            {companies.map((c) => (
              <span key={c} className="text-base font-bold text-gray-300 tracking-tight">{c}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;