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
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1 shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-all duration-500 overflow-hidden relative border-2 border-secondary">
                                    <img
                                        src="/School-Logo-1.jpg"
                                        alt="St. Joseph's Convent School Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </Link>
                            <div>
                                <h4 className="text-sm font-serif font-black mb-2 uppercase tracking-widest text-white">Contact Details</h4>
                                <div className="space-y-2 text-[12px] text-white leading-relaxed font-bold tracking-wider">
                                    <p className="text-secondary text-base uppercase">St. Joseph's Convent School</p>
                                    <div className="space-y-1 opacity-90">
                                        <p className="flex items-center gap-2.5 text-[11px]"><MapPin size={14} className="text-secondary" /> Opp. B. T. M. JHARSUGUDA, ODISHA-768203</p>
                                        <p className="flex items-center gap-2.5 text-[11px]"><Phone size={14} className="text-secondary" /> 06645- 270748</p>
                                    </div>
                                    <div className="space-y-1 mt-2 text-[11px]">
                                        <p className="text-secondary hover:underline cursor-pointer transition-all flex items-center gap-2.5">
                                            <Mail size={14} /> sjcsjharsuguda@gmail.com
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
                                    { name: "HOME", href: "/", highlight: true },
                                    { name: "ABOUT US", href: "#about" },
                                    { name: "ADMISSIONS", href: "/admissions" },
                                    { name: "ACADEMICS", href: "/academics" },
                                    { name: "CONTACT US", href: "/enquiry" },
                                    { name: "ALUMNI", href: "#" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className={`hover:text-secondary transition-all block py-1 flex items-center gap-2 group ${item.highlight ? "text-secondary" : ""}`}>
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
                                {["THE SCHOOL", "PRINCIPAL'S DESK", "MANAGEMENT", "CURRICULUM", "STUDY MATERIAL", "RESULTS", "CALENDAR"].map((item) => (
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
                                {["GALLERY", "MANDATORY DISCLOSURE", "BRANCHES", "PTA MEMBERS", "SMC", "AWARDS", "CARREERS"].map((item) => (
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
                        &copy; 2026 ST. JOSEPH'S CONVENT SCHOOL. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em]">
                        POWERED BY <span className="text-secondary font-black">AASMO DIGITAL</span>
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
