"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Academics", href: "#academics" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Bar - For that "Content Heavy" Professional Look */}
            <div className="bg-[#1a1a1a] text-gray-300 text-[10px] py-1.5 border-b border-white/10 hidden md:block z-50 relative h-[28px]">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 hover:text-[#FFC107] transition-colors cursor-pointer">
                            <Phone size={12} className="text-[#FFC107]" /> +91-011-20895675
                        </span>
                        <span className="flex items-center gap-2 hover:text-[#FFC107] transition-colors cursor-pointer">
                            <Mail size={12} className="text-[#FFC107]" /> info@stmartinschooldelhicantt.com
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin size={12} className="text-[#FFC107]" /> Church Road, Delhi Cantt
                        </span>
                    </div>
                    <div className="flex items-center gap-4 font-bold uppercase tracking-wider">
                        <Link href="#" className="hover:text-white">Alumni</Link>
                        <span className="text-white/20">|</span>
                        <Link href="#" className="hover:text-white">Careers</Link>
                        <span className="text-white/20">|</span>
                        <Link href="#" className="hover:text-white">Pay Fee Online</Link>
                    </div>
                </div>
            </div>

            <header
                className={`fixed top-[28px] left-0 w-full z-40 transition-all duration-300 ${scrolled
                    ? "bg-primary shadow-2xl py-1"
                    : "bg-gradient-to-b from-black/90 to-transparent py-2"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-[60px]">
                    {/* Premium Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 md:w-14 md:h-14 drop-shadow-2xl transition-transform group-hover:scale-105">
                            <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-lg">
                                {/* Base Shield - Multi-layered for depth */}
                                <path d="M50 5 L88 22 L88 62 C88 78 50 95 50 95 C50 95 12 78 12 62 L12 22 L50 5 Z" fill="#800000" stroke="#FFC107" strokeWidth="2" />
                                <path d="M50 10 C30 20 20 40 20 60 C20 75 50 88 50 88 C50 88 80 75 80 60 C80 40 70 20 50 10 Z" fill="#5c0000" />

                                {/* School Symbol: Open Book & Torch */}
                                <path d="M35 55 Q50 50 65 55 L65 40 Q50 35 35 40 Z" fill="white" />
                                <path d="M50 25 Q55 35 50 45 Q45 35 50 25" fill="#FFC107" />

                                {/* Decorative elements */}
                                <circle cx="35" cy="30" r="2" fill="#FFC107" opacity="0.8" />
                                <circle cx="65" cy="30" r="2" fill="#FFC107" opacity="0.8" />

                                {/* Scroll for Motto */}
                                <path d="M25 78 Q50 86 75 78" fill="none" stroke="#FFC107" strokeWidth="10" strokeLinecap="round" />
                                <text x="50" y="80" fontSize="8" fill="#800000" textAnchor="middle" fontWeight="bold" fontFamily="serif" letterSpacing="1">ESTD 1960</text>
                            </svg>
                        </div>
                        <div className="flex flex-col text-white drop-shadow-md">
                            <span className="font-serif font-bold text-base md:text-xl leading-none tracking-tight text-[#FFC107]">
                                ST. MARTIN'S
                            </span>
                            <span className="text-[9px] md:text-xs tracking-[0.3em] font-bold text-white/90 uppercase mt-1">
                                Diocesan School
                            </span>
                            <span className="text-[7px] md:text-[9px] text-gray-300 tracking-wider">
                                Delhi Cantonment, New Delhi
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-1.5 py-1 rounded-full border border-white/10 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-white/90 hover:text-[#FFC107] hover:bg-white/10 px-5 py-2.5 rounded-full transition-all uppercase tracking-widest"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/enquiry"
                            className="hidden md:flex items-center gap-2 bg-[#FFC107] text-[#800000] px-6 py-2.5 rounded-sm text-sm font-black uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow-[0_0_15px_rgba(255,193,7,0.5)] transform hover:-translate-y-0.5"
                        >
                            <Phone size={16} />
                            Enquire Now
                        </Link>
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-bold text-white py-2 border-b border-white/10"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/enquiry"
                                    className="flex items-center justify-center gap-2 bg-secondary text-primary py-3 rounded-lg font-bold mt-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone size={18} />
                                    Enquire Now
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Scrolling News Ticker (Marquee) */}
            <div className="fixed top-[88px] left-0 w-full z-30 bg-[#FFC107] text-[#800000] border-b border-[#800000] shadow-md overflow-hidden py-1.5">
                <div className="whitespace-nowrap animate-marquee flex gap-10 items-center text-[12px] font-black uppercase tracking-widest">
                    <span className="flex items-center gap-2">📢 Admissions Open for Session 2026-27</span>
                    <span className="flex items-center gap-2">🏆 Congratulations to our Football Team for winning the Zone Finals</span>
                    <span className="flex items-center gap-2">📝 Annual Date Sheet released for Class X & XII</span>
                    <span className="flex items-center gap-2">📢 Admissions Open for Session 2026-27</span>
                    <span className="flex items-center gap-2">🏆 Congratulations to our Football Team for winning the Zone Finals</span>
                </div>
            </div>
            <style jsx>{`
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </>
    );
}
