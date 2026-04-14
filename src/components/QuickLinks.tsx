"use client";

import React from "react";
import Link from "next/link";

const quickLinks = [
    { name: "Admission", href: "/admissions" },
    { name: "Curriculum", href: "/uploading-soon" },
    { name: "Registration Forms", href: "/enquiry" },
    { name: "Contact Us", href: "/enquiry" },
];

export default function QuickLinks() {
    return (
        <section className="bg-brand-red py-6 shadow-2xl relative overflow-hidden">
            {/* Subtle background texture for premium feel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
            <div className="container mx-auto px-4">
                {/* School Name */}
                <h2 className="text-white text-center text-xl md:text-2xl font-serif font-bold tracking-wide mb-4 uppercase">
                    St. Joseph's Convent School, Jharsuguda
                </h2>

                {/* Quick Links Buttons */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {quickLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 md:px-6 py-2 border-2 border-white text-white text-xs md:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all duration-500 rounded-sm shadow-lg hover:scale-105 active:scale-95"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
