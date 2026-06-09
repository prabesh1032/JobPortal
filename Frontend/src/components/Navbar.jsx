import { useState } from "react";
import { Briefcase, BookOpen, GraduationCap, LogIn, UserPlus, Menu, X, Info } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Jobs", icon: <Briefcase size={16} />, href: "/jobs", badge: "1.2k" },
        { label: "Blogs", icon: <BookOpen size={16} />, href: "/blogs" },
        { label: "Training", icon: <GraduationCap size={16} />, href: "/training" },
    ];

    return (
        <>
            {/* Top announcement bar */}
            <div className="bg-gray-900 text-gray-400 text-sm py-1.5 px-6 flex items-center justify-center gap-2">
                <Info size={13} className="text-blue-400" />
                <span className="text-white font-medium">1200+ jobs</span> available this week ·
                <a href="/jobs" className="text-blue-400 font-semibold hover:underline">Browse all →</a>
            </div>

            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-[999]">
                <div className="max-w-6xl mx-auto px-7 h-16 flex items-center justify-between gap-6">

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Briefcase size={19} color="white" strokeWidth={2.2} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[19px] font-bold text-gray-900 tracking-tight">HireNest</span>
                            <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest mt-0.5">Job Portal</span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-1 list-none">
                        {navLinks.map(({ label, icon, href, badge }) => (
                            <li key={label}>
                                <a href={href} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:text-gray-900 hover:bg-blue-50 transition-all no-underline">
                                    {icon} {label}
                                    {badge && <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{badge}</span>}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
                        <Button variant="outline"><LogIn size={15} /> Log in</Button>
                        <Button variant="black"><UserPlus size={15} /> Sign Up</Button>
                    </div>

                    {/* Hamburger */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all">
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden px-6 pb-5 flex flex-col gap-1 border-t border-gray-100">
                        {navLinks.map(({ label, icon, href, badge }) => (
                            <a key={label} href={href} className="flex items-center gap-2.5 px-3.5 py-3 text-sm font-medium text-gray-500 rounded-lg hover:text-gray-900 hover:bg-blue-50 transition-all no-underline">
                                {icon} {label}
                                {badge && <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{badge}</span>}
                            </a>
                        ))}
                        <div className="border-t border-gray-100 mt-2 pt-4 flex gap-2.5">
                            <Button variant="outline"><LogIn size={15} /> Log in</Button>
                            <Button variant="black"><UserPlus size={15} /> Sign Up</Button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;