"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
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
            <div className="fixed top-0 left-0 w-full z-[110] bg-secondary text-primary border-b border-primary shadow-md overflow-hidden py-0 flex items-center">
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


            <header
                className={`fixed top-[38px] left-0 w-full transition-all duration-300 z-[100] ${scrolled
                    ? "bg-navbar shadow-2xl py-1"
                    : "bg-navbar/95 backdrop-blur-md py-2 border-b border-white/5"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-[60px]">
                    {/* Premium Logo */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
                        <div className="relative w-10 h-10 md:w-16 md:h-16 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <img
                                src="/School-Logo-1.jpg"
                                alt="St. Joseph's Convent School Logo"
                                className="w-full h-full object-contain rounded-full border-2 border-[#FFCC00] bg-white p-0.5 shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col text-white drop-shadow-md">
                            <span className="font-serif font-bold text-sm md:text-xl leading-none tracking-tight text-[#FFD700]">
                                ST. JOSEPH'S
                            </span>
                            <span className="text-[7px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-bold text-white/90 uppercase mt-0.5 md:mt-1">
                                CONVENT SCHOOL
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav - Now only showing on lg (Large screens) */}
                    <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md px-1.5 py-1 rounded-full border border-white/10 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[12px] xl:text-sm font-bold text-white/90 hover:text-[#FFC107] hover:bg-white/10 px-4 xl:px-5 py-2.5 rounded-full transition-all uppercase tracking-widest"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2 lg:gap-4 shrink-0">
                        <Link
                            href="/enquiry"
                            className="hidden lg:flex items-center gap-2 bg-[#FFD700] text-[#004080] px-6 py-2.5 rounded-sm text-sm font-black uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow-[0_0_15px_rgba(255,215,0,0.5)] transform hover:-translate-y-0.5"
                        >
                            <Phone size={16} />
                            Admission Now
                        </Link>
                        <button
                            className="p-2 text-white bg-white/10 rounded-md lg:hidden z-[120] border border-white/20 active:scale-90 transition-transform"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay - Moved outside header for proper stacking context */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[1000] lg:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-gradient-to-b from-[#800000] to-[#500000] text-white shadow-2xl flex flex-col p-0"
                        >
                            {/* Header inside Drawer */}
                            <div className="pt-24 px-8 pb-8 relative flex flex-col gap-6">
                                <button
                                    className="absolute top-10 right-6 p-2.5 bg-white/10 rounded-full text-[#FFD700] hover:bg-white/20 transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X size={28} />
                                </button>

                                <div className="flex flex-col gap-3">
                                    <div className="w-16 h-16 bg-white rounded-2xl p-1.5 shadow-xl">
                                        <img src="/School-Logo-1.jpg" alt="Logo" className="w-full h-full object-contain rounded-xl" />
                                    </div>
                                    <div>
                                        <p className="font-serif font-black text-[#FFD700] text-xl tracking-tight leading-none">ST. JOSEPH'S</p>
                                        <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mt-1">Jharsuguda, Odisha</p>
                                    </div>
                                </div>
                                <div className="w-12 h-1 bg-[#FFD700]"></div>
                            </div>

                            {/* Menu Links */}
                            <div className="flex-1 overflow-y-auto px-4 pb-10">
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <div key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center justify-between py-5 px-6 rounded-2xl hover:bg-white/10 transition-all group"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="text-base font-bold uppercase tracking-widest group-hover:text-[#FFD700] transition-colors">{link.name}</span>
                                                <ChevronRight size={18} className="text-[#FFD700] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                            </Link>
                                            <div className="mx-6 h-[1px] bg-white/5"></div>
                                        </div>
                                    ))}
                                </nav>
                            </div>

                            {/* Bottom Button */}
                            <div className="p-8 bg-black/20 mt-auto border-t border-white/5">
                                <Link
                                    href="/enquiry"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-4 bg-[#FFD700] text-[#800000] font-black text-sm uppercase tracking-[0.2em] rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                                >
                                    Admission Now
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
