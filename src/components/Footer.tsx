"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp, ChevronRight } from "lucide-react";

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#111] text-white pt-0 relative border-t border-white/5">
            {/* Top Quote Bar */}
            <div className="bg-primary py-2 text-center px-4 relative z-10">
                <p className="font-serif italic text-white/95 text-[10px] md:text-xs tracking-wide">
                    "Good judgment comes from experience, and a lot of that comes from bad judgment." ~ Will Rogers
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-6 pt-6 pb-2">
                <div className="grid md:grid-cols-12 gap-4 mb-4">

                    {/* Brand / Logo Section */}
                    <div className="md:col-span-4 space-y-4">
                        <div className="flex flex-col items-start gap-4">
                            <Link href="/" className="group">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-all duration-500 overflow-hidden relative">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        {/* Shield Base */}
                                        <path d="M50 10 L85 25 L85 60 C85 75 50 90 50 90 C50 90 15 75 15 60 L15 25 L50 10 Z" fill="#800000" />
                                        <path d="M50 15 L80 28 L80 58 C80 70 50 83 50 83 C50 83 20 70 20 58 L20 28 L50 15 Z" fill="white" />
                                        <path d="M50 18 L77 30 L77 56 C77 67 50 79 50 79 C50 79 23 67 23 56 L23 30 L50 18 Z" fill="#800000" />

                                        {/* Open Book Icon */}
                                        <path d="M35 55 Q50 50 65 55 L65 40 Q50 35 35 40 Z" fill="#FFC107" />
                                        <path d="M50 40 L50 55" stroke="white" strokeWidth="1" />

                                        {/* Torch / Lamp flame */}
                                        <path d="M50 25 Q55 35 50 45 Q45 35 50 25" fill="#FFC107" />

                                        {/* Star elements */}
                                        <circle cx="35" cy="30" r="2" fill="#FFC107" />
                                        <circle cx="65" cy="30" r="2" fill="#FFC107" />
                                    </svg>
                                </div>
                            </Link>
                            <div>
                                <h4 className="text-sm font-serif font-black mb-2 uppercase tracking-widest text-white">Contact Details</h4>
                                <div className="space-y-2 text-[12px] text-white leading-relaxed font-bold tracking-wider">
                                    <p className="text-secondary text-base">ST. MARTIN'S DIOCESAN SCHOOL</p>
                                    <div className="space-y-1 opacity-90">
                                        <p className="flex items-center gap-2.5 text-[11px]"><MapPin size={14} className="text-secondary" /> CHURCH ROAD, DELHI CANTT-110010</p>
                                        <p className="flex items-center gap-2.5 text-[11px]"><Phone size={14} className="text-secondary" /> +91-011-20895675, 20892683</p>
                                        <p className="flex items-center gap-2.5 ml-6.5 text-[11px]">+91- 7701847614</p>
                                    </div>
                                    <div className="space-y-1 mt-2 text-[11px]">
                                        <p className="text-secondary hover:underline cursor-pointer transition-all flex items-center gap-2.5">
                                            <Mail size={14} /> info@stmartinschooldelhicantt.com
                                        </p>
                                        <p className="text-secondary hover:underline cursor-pointer transition-all flex items-center gap-2.5">
                                            <Mail size={14} className="opacity-0" /> admissions@stmartinschooldelhicantt.com
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 text-white mt-4 group cursor-pointer hover:text-secondary transition-colors font-black text-[10px]">
                                        <div className="w-8 h-8 border-2 border-white group-hover:border-secondary rounded-full flex items-center justify-center text-[9px] transition-colors">GO</div>
                                        <span className="tracking-[0.2em]">GET DIRECTIONS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 pt-2 border-t border-white/10 w-fit">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 bg-white/5 rounded-full text-white hover:bg-secondary hover:text-white transition-all duration-300">
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Group */}
                    <div className="md:col-span-8 flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="flex-1 space-y-2">
                            <h4 className="text-sm font-serif font-black uppercase tracking-widest text-white relative inline-block mb-4">
                                Quick Links
                                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary"></span>
                            </h4>
                            <ul className="space-y-1.5 font-bold text-[12px] text-white/80">
                                {[
                                    { name: "HOME", highlight: true },
                                    { name: "SCHOOL INFORMATION" },
                                    { name: "CONTACT US" },
                                    { name: "LOGIN" },
                                    { name: "CAREERS" },
                                    { name: "BUS ROUTES" }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href="#" className={`hover:text-secondary transition-all block py-1 flex items-center gap-2 group ${item.highlight ? "text-secondary" : ""}`}>
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Middle Col Site Map */}
                        <div className="flex-1 space-y-2 md:pt-8">
                            <ul className="space-y-1.5 font-bold text-[12px] text-white/80">
                                {["ABOUT", "ADMISSIONS", "ACADEMIC", "BEYOND ACADEMICS", "CIRCULAR", "FACILITIES", "CAREERS"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="hover:text-secondary transition-all block py-1 flex items-center gap-2 group">
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Last Col Site Map */}
                        <div className="flex-1 space-y-2 md:pt-8">
                            <ul className="space-y-1.5 font-bold text-[12px] text-white/80">
                                {["ALUMNI", "CO-CURRICULAR ACTIVITIES", "AWARDS AND RECOGNITION", "BOARD RESULT", "SMDS IN NEWS", "GALLERY"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="hover:text-secondary transition-all block py-1 flex items-center gap-2 group">
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em]">
                        &copy; 2026 ST. MARTIN'S DIOCESAN SCHOOL. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em]">
                        POWERED BY <span className="text-secondary font-black">SHAURYASOFT</span>
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 z-[60] w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-secondary transition-all duration-300 transform hover:-translate-y-2 active:scale-95 group border-2 border-white/20"
                >
                    <ArrowUp size={24} className="group-hover:animate-bounce" />
                </button>
            )}

            {/* Side Tabs (Re-styled for professionalism) */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block group">
                <div className="bg-primary text-white py-3 px-2 rounded-l-lg shadow-2xl font-black uppercase writing-mode-vertical cursor-pointer hover:bg-black transition-all border-l-2 border-secondary tracking-widest text-[9px] opacity-90 hover:opacity-100">
                    Admission Enquiry
                </div>
            </div>
            <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block group">
                <div className="bg-primary text-white py-3 px-2 rounded-r-lg shadow-2xl font-black uppercase writing-mode-vertical cursor-pointer hover:bg-black transition-all border-r-2 border-secondary tracking-widest text-[9px] opacity-90 hover:opacity-100">
                    Online Fee Payment
                </div>
            </div>

            <style jsx>{`
                .writing-mode-vertical {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </footer>
    );
}
