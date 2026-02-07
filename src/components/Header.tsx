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
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Scrolling News Ticker (Marquee) - At the very top */}
            <div className="fixed top-0 left-0 w-full z-50 bg-secondary text-primary border-b border-primary shadow-md overflow-hidden py-0 flex items-center">
                <div className="flex-1 overflow-hidden relative py-2.5 px-4 md:px-0">
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

            <header
                className={`fixed top-[38px] left-0 w-full transition-all duration-300 ${isOpen ? "z-[100]" : "z-40"} ${scrolled
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
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/60 z-[90] md:hidden backdrop-blur-sm"
                            />

                            {/* Drawer */}
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                                className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] z-[100] md:hidden bg-gradient-to-br from-[#8B0000] to-[#5a0000] text-white shadow-2xl rounded-l-[3rem] overflow-hidden"
                            >
                                {/* Vertical Tab - Admission Enquiry */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-auto w-12 flex items-center justify-center">
                                    <div className="-rotate-90 origin-center whitespace-nowrap text-[10px] font-black tracking-[0.2em] uppercase text-white/50 flex gap-4">
                                        <span>Admission Enquiry Form</span>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="h-full w-full pl-12 pr-6 py-8 flex flex-col relative">
                                    {/* Close Button - Moved down to avoid marquee */}
                                    <button
                                        className="absolute top-10 right-6 text-white/80 hover:text-white transition-colors z-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <X size={32} />
                                    </button>

                                    {/* Menu Items */}
                                    <div className="flex flex-col gap-5 mt-16">
                                        {navLinks.map((link, i) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + i * 0.05 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className="text-xl font-serif font-bold text-white hover:text-[#FFCC00] transition-colors flex items-center justify-end text-right gap-3 group"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {link.name}
                                                    {/* Dot indicator */}
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                </Link>
                                                <div className="w-full h-[1px] bg-white/10 mt-2"></div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Bottom Info */}
                                    <div className="mt-auto flex flex-col items-end gap-6 text-right">

                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#FFCC00] hover:text-[#8B0000] transition-colors">
                                                <Phone size={18} />
                                            </a>
                                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#FFCC00] hover:text-[#8B0000] transition-colors">
                                                <Mail size={18} />
                                            </a>
                                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#FFCC00] hover:text-[#8B0000] transition-colors">
                                                <MapPin size={18} />
                                            </a>
                                        </div>

                                        <Link
                                            href="/enquiry"
                                            onClick={() => setIsOpen(false)}
                                            className="px-6 py-3 bg-[#FFCC00] text-[#8B0000] font-black text-xs uppercase tracking-widest rounded-full shadow-lg hover:scale-105 transition-transform"
                                        >
                                            Enquire Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
