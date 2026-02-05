"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "Activities", href: "#recent-activities" },
    { name: "Contact", href: "/enquiry" },
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
                        <span className="flex items-center gap-2 hover:text-[#FFD700] transition-colors cursor-pointer">
                            <Phone size={12} className="text-[#FFD700]" /> 06645-270748
                        </span>
                        <span className="flex items-center gap-2 hover:text-[#FFD700] transition-colors cursor-pointer">
                            <Mail size={12} className="text-[#FFD700]" /> sjcsjharsuguda@gmail.com
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin size={12} className="text-[#FFD700]" /> Opp. B. T. M. Jharsuguda, Odisha
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
                        <div className="relative w-12 h-12 md:w-16 md:h-16 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <img
                                src="/School-Logo-1.jpg"
                                alt="St. Joseph's Convent School Logo"
                                className="w-full h-full object-contain rounded-full border-2 border-[#FFCC00] bg-white p-0.5 shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col text-white drop-shadow-md">
                            <span className="font-serif font-bold text-base md:text-xl leading-none tracking-tight text-[#FFD700]">
                                ST. JOSEPH'S
                            </span>
                            <span className="text-[9px] md:text-xs tracking-[0.3em] font-bold text-white/90 uppercase mt-1">
                                CONVENT SCHOOL
                            </span>
                            <span className="text-[7px] md:text-[9px] text-gray-300 tracking-wider">
                                JHARSUGUDA, ODISHA
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
                            className="hidden md:flex items-center gap-2 bg-[#FFD700] text-[#004080] px-6 py-2.5 rounded-sm text-sm font-black uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow-[0_0_15px_rgba(255,215,0,0.5)] transform hover:-translate-y-0.5"
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

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-[100] md:hidden bg-primary/95 backdrop-blur-2xl flex flex-col pt-24 px-8"
                        >
                            {/* Close Button in Fullscreen */}
                            <button
                                className="absolute top-8 right-8 text-white p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={32} />
                            </button>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-4xl font-serif font-black text-white hover:text-secondary transition-colors uppercase tracking-tight flex items-center justify-between group"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                            <span className="w-12 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-auto mb-16 space-y-8"
                            >
                                <div className="space-y-4">
                                    <p className="text-secondary font-black text-xs tracking-[0.3em] uppercase">Connect With us</p>
                                    <div className="flex items-center gap-6">
                                        <span className="p-4 bg-white/5 rounded-2xl text-white hover:bg-secondary hover:text-primary transition-all">
                                            <Phone size={24} />
                                        </span>
                                        <span className="p-4 bg-white/5 rounded-2xl text-white hover:bg-secondary hover:text-primary transition-all">
                                            <Mail size={24} />
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href="/enquiry"
                                    className="flex items-center justify-between bg-secondary text-primary p-6 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl hover:scale-95 transition-transform"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Enquire Now
                                    <Phone size={24} />
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Scrolling News Ticker (Marquee) - Shifted down to prevent overlap */}
            <div className="fixed top-[105px] left-0 w-full z-30 bg-secondary text-primary border-b border-primary shadow-md overflow-hidden py-0 flex items-center">
                <div className="flex-1 overflow-hidden relative py-3 px-4 md:px-0">
                    <div className="whitespace-nowrap animate-marquee flex gap-10 items-center text-[12px] font-black uppercase tracking-widest text-black">
                        <span className="flex items-center gap-2">📢 Admissions Open for Session 2026-27</span>
                        <span className="flex items-center gap-2">🏆 Congratulations to our Football Team for winning the Zone Finals</span>
                        <span className="flex items-center gap-2">📝 Annual Date Sheet released for Class X & XII</span>
                        <span className="flex items-center gap-2">📢 Admissions Open for Session 2026-27</span>
                        <span className="flex items-center gap-2">🏆 Congratulations to our Football Team for winning the Zone Finals</span>
                    </div>
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
