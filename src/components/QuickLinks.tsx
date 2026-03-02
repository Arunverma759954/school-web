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
        <section className="bg-[#8B0000] py-4 shadow-lg ">
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
                            className="px-4 md:px-6 py-2 border-2 border-white text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#8B0000] transition-all duration-300 rounded-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
