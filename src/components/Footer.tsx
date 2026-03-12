"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp, ChevronRight, Users } from "lucide-react";

const VISITOR_STORAGE_KEY = "school_web_visitor_count";

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        try {
            const raw = typeof window !== "undefined" ? localStorage.getItem(VISITOR_STORAGE_KEY) : null;
            const current = raw ? Math.max(0, parseInt(raw, 10) || 0) : 0;
            const next = current + 1;
            if (typeof window !== "undefined") localStorage.setItem(VISITOR_STORAGE_KEY, String(next));
            setVisitorCount(next);
        } catch {
            setVisitorCount(1);
        }
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
                                <h4 className="text-base font-serif font-black mb-4 uppercase tracking-[0.2em] text-[#FFCC00] border-b border-white/10 pb-2 w-fit">
                                    Contact Details
                                </h4>
                                <div className="space-y-4 text-white">
                                    <p className="text-[#FFCC00] text-xl font-serif font-black uppercase tracking-tight">St. Joseph&apos;s Convent School</p>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-4 group/item">
                                            <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover/item:bg-[#FFCC00]/20 transition-colors">
                                                <MapPin size={18} className="text-[#FFCC00]" />
                                            </div>
                                            <p className="text-sm md:text-base font-bold leading-snug tracking-wide text-white/90">
                                                Opposite of B. T. M. Jharsuguda. Odisha. <br />
                                                Pin-768203.
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4 group/item">
                                            <div className="p-2 bg-white/5 rounded-lg group-hover/item:bg-[#FFCC00]/20 transition-colors">
                                                <Phone size={18} className="text-[#FFCC00]" />
                                            </div>
                                            <p className="text-sm md:text-base font-bold tracking-widest text-white/90">9439010371 (Working days only)</p>
                                        </div>

                                        <div className="flex items-center gap-4 group/item">
                                            <div className="p-2 bg-white/5 rounded-lg group-hover/item:bg-[#FFCC00]/20 transition-colors">
                                                <Mail size={18} className="text-[#FFCC00]" />
                                            </div>
                                            <a href="mailto:sjcsjharsuguda@gmail.com" className="text-sm md:text-base font-bold text-white/90 hover:text-[#FFCC00] transition-colors lowercase">
                                                sjcsjharsuguda@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <a
                                        href="https://maps.google.com/?q=St.+Joseph's+Convent+School,+Jharsuguda,+Odisha"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-white mt-8 group cursor-pointer"
                                    >
                                        <div className="w-10 h-10 border-2 border-[#FFCC00] group-hover:bg-[#FFCC00] group-hover:text-black rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300">GO</div>
                                        <span className="tracking-[0.3em] font-black text-[11px] group-hover:text-[#FFCC00] transition-colors">GET DIRECTIONS</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 pt-2 border-t border-white/10 w-fit">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href={i === 0 ? "https://www.facebook.com/joseph.sjsm" : "#"}
                                    target={i === 0 ? "_blank" : undefined}
                                    rel={i === 0 ? "noopener noreferrer" : undefined}
                                    className="p-2 bg-white/5 rounded-full text-white hover:bg-secondary hover:text-white transition-all duration-300"
                                >
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
                                    { name: "ABOUT US", href: "/#about" },
                                    { name: "ADMISSIONS", href: "/admissions" },
                                    { name: "ACADEMICS", href: "/academics" },
                                    { name: "TRANSFER CERTIFICATE", href: "/transfer-certificate", highlight: false, badge: "TC" },
                                    { name: "CONTACT US", href: "/enquiry" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className={`hover:text-secondary transition-all block py-1 flex items-center gap-2 group ${item.highlight ? "text-secondary" : ""}`}>
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                            {item.name}
                                            {(item as { badge?: string }).badge && <span className="ml-1 bg-secondary text-white text-[8px] font-black px-1.5 py-0.5 rounded-full">{(item as { badge?: string }).badge}</span>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Middle Col Site Map */}
                        <div className="flex-1 space-y-2 md:pt-8">
                            <ul className="space-y-1.5 font-bold text-[12px] text-white/80">
                                {[
                                    // { name: "THE SCHOOL", href: "#" },
                                    { name: "PRINCIPAL'S DESK", href: "/principal-desk" },
                                    { name: "MANAGEMENT", href: "#" },
                                    { name: "CURRICULUM", href: "/uploading-soon" },
                                    { name: "SYLLABUS", href: "/uploading-soon" },
                                    { name: "RESULTS", href: "/uploading-soon" },
                                    { name: "CALENDAR", href: "/uploading-soon" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-secondary transition-all block py-1 flex items-center gap-2 group">
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Last Col Site Map + Visitors */}
                        <div className="flex-1 space-y-2 md:pt-8">
                            <ul className="space-y-1.5 font-bold text-[12px] text-white/80">
                                <li>
                                    <Link href="/gallery" className="hover:text-secondary transition-all block py-1 flex items-center gap-2 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                        GALLERY
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mandatory-disclosure" className="hover:text-secondary transition-all block py-1 flex items-center gap-2 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                        MANDATORY DISCLOSURE
                                    </Link>
                                </li>
                                {["SMC", "AWARDS", "CAREERS"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="hover:text-secondary transition-all block py-1 flex items-center gap-2 group">
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-secondary" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}

                                {/* Visitors counter inside quick links area */}
                                <li className="pt-3 mt-2 border-t border-white/10">
                                    <div className="inline-flex items-center gap-2.5 text-[13px] md:text-sm text-white/50 uppercase tracking-[0.16em]">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                            <Users size={18} className="text-[#FFCC00]" />
                                        </div>
                                        <span className="text-white/50 font-semibold">Visitors</span>
                                        <span className="font-serif font-bold text-[#FFCC00] tabular-nums text-base md:text-lg">
                                            {visitorCount !== null ? visitorCount.toLocaleString("en-IN") : "—"}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/10 pt-8 mt-4 flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em] text-center leading-relaxed">
                            &copy; 2026 ST. JOSEPH'S CONVENT SCHOOL. ALL RIGHTS RESERVED.
                        </p>
                    </div>

                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.06] px-8 py-3 rounded-full border border-white/10 hover:border-secondary/40 transition-all duration-500">
                            <span className="text-[10px] md:text-11px text-white/50 font-bold uppercase tracking-[0.2em]">
                                Designed & Developed by
                            </span>
                            <div className="h-4 w-px bg-white/10"></div>
                            <a
                                href="https://www.digitalsolution360.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] md:text-xs text-secondary hover:text-white font-black uppercase tracking-[0.25em] transition-all duration-300 flex items-center gap-2"
                            >
                                Digital Solution 360
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                                </span>
                            </a>
                        </div>
                    </div>
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




        </footer>
    );
}
