import { Briefcase } from "lucide-react";

const footerLinks = {
    "For Job Seekers": [
        { label: "Browse Jobs", href: "/jobs" },
        { label: "Browse Companies", href: "/companies" },
        { label: "Salary Guide", href: "/salary" },
        { label: "Career Advice", href: "/advice", badge: "NEW" },
        { label: "Resume Builder", href: "/resume" },
        { label: "Job Alerts", href: "/alerts" },
    ],
    "For Recruiters": [
        { label: "Post a Job", href: "/post-job" },
        { label: "Pricing Plans", href: "/pricing" },
        { label: "Talent Search", href: "/talent" },
        { label: "Hiring Dashboard", href: "/dashboard" },
        { label: "Success Stories", href: "/stories" },
    ],
    "Company": [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blogs", badge: "NEW" },
        { label: "Training", href: "/training" },
        { label: "Contact Us", href: "/contact" },
        { label: "Help Center", href: "/help" },
    ],
};

const socials = [
    {
        label: "Twitter", href: "#",
        icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>,
    },
    {
        label: "LinkedIn", href: "#",
        icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
    },
    {
        label: "GitHub", href: "#",
        icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
    },
    {
        label: "Instagram", href: "#",
        icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
    },
];

const Footer = () => {
    return (
        <footer className="bg-gray-950 w-full">

            {/* Main Grid */}
            <div className="max-w-6xl mx-auto px-7 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand Column */}
                <div className="lg:col-span-1 flex flex-col gap-5 min-w-0">

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5 no-underline w-fit">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Briefcase size={19} color="white" strokeWidth={2.2} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[19px] font-extrabold text-slate-100 tracking-tight">HireNest</span>
                            <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest mt-0.5">Job Portal</span>
                        </div>
                    </a>

                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Connecting talented people with the companies that need them most. Your next opportunity is just a search away.
                    </p>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Get job alerts in your inbox</p>
                        <div className="flex w-full min-w-0">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="min-w-0 flex-1 bg-gray-900 border border-gray-800 border-r-0 rounded-l-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-blue-600 transition-colors"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2.5 rounded-r-lg transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-2.5">
                        {socials.map(({ label, href, icon }) => (
                            <a key={label} href={href} aria-label={label}
                                className="w-9 h-9 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all no-underline">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link Columns */}
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title} className="flex flex-col gap-3 min-w-0">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">{title}</h4>
                        {links.map(({ label, href, badge }) => (
                            <a key={label} href={href}
                                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-100 transition-colors no-underline w-fit">
                                {label}
                                {badge && (
                                    <span className="text-[9px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded-full">
                                        {badge}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-900 mx-7" />

            {/* Bottom Bar */}
            <div className="max-w-6xl mx-auto px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">

                <p className="text-sm text-slate-600 text-center sm:text-left">
                    © 2025 <span className="text-blue-500 font-semibold">HireNest</span>. All rights reserved. Built with love for job seekers.
                </p>

                <div className="flex items-center gap-6 flex-wrap justify-center">
                    {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                        <a key={item} href="#" className="text-sm text-slate-600 hover:text-slate-200 transition-colors no-underline">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-3 py-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span className="text-xs font-medium text-slate-400">All systems operational</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;