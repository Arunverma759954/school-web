"use client";

import React from "react";
import { Pin, ArrowRight, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

const notices = [
    { title: "Admission Open for Session 2026-27", date: "Feb 05, 2026", isNew: true },
    { title: "Date Sheet for Class X & XII Pre-Boards", date: "Feb 02, 2026", isNew: true },
    { title: "Winter Carnival 2026 - Registration", date: "Jan 28, 2026", isNew: false },
    { title: "Results of Inter-House Debate Competition", date: "Jan 15, 2026", isNew: false },
    { title: "Updated Transport Routes - Effective from Feb 1st", date: "Jan 10, 2026", isNew: false },
    { title: "Scholarship Applications for Meritorious Students", date: "Jan 05, 2026", isNew: false },
];

export default function NoticeBoard() {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-stretch">

                    {/* Left: Welcome Section with Stacked Images */}
                    <div className="lg:col-span-7 bg-[#F5F5F5] relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row gap-0">
                            {/* Left: Stacked Images (Collage Style) */}
                            <div className="w-full md:w-2/5 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center p-4">
                                {/* Decorative Element */}
                                <div className="absolute w-[80%] h-[80%] border-[3px] border-[#8B0000]/20 rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                                {/* Top Image - Building */}
                                <div className="absolute top-8 left-4 w-3/4 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-6 hover:rotate-0 transition-all duration-500 z-10 group-hover:scale-105">
                                    <img
                                        src="/image3.jpg"
                                        alt="St. Joseph's Convent School Building"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Bottom Image - Principal/Founder */}
                                <div className="absolute bottom-12 right-4 w-3/4 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500 z-20 group-hover:scale-105">
                                    <img
                                        src="/image4.jpg"
                                        alt="School Founder"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right: Welcome Content */}
                            <div className="w-full md:w-3/5 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#8B0000] mb-2 uppercase tracking-wide">
                                    Welcome To
                                </h2>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#8B0000] mb-2 uppercase tracking-wide">
                                    St. Joseph's Convent
                                </h3>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#8B0000] mb-2 uppercase tracking-wide">
                                    School
                                </h3>
                                <h4 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#8B0000] mb-6 uppercase tracking-wide">
                                    Jharsuguda
                                </h4>

                                <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify mb-8">
                                    St. Joseph's Convent School, Jharsuguda under the aegis of the Kloster St. Trudpert society, has a glorious history of being the first English medium Christian minority Institution in Jharsuguda. Way back in 1922, the noble Christian Missionary and Educationist, the Sisters of St. Joseph of St. Marc, founded the school within the serene environment of Jharsuguda. The institution was the answer to countless prayers and requests of the local community and the noble missionary ensured that a solid foundation was set up for the establishment of an educational institution that would raise children rooted in strong moral and Christian values to be a light to the world they live in. True to the motto of the school, <span className="font-semibold italic">"Virtue Alone Ennobles"</span>, the students have carried this spark to the widest corners of the world.
                                </p>

                                <div className="flex justify-end">
                                    <button className="bg-[#8B0000] text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#6B0000] transition-all shadow-lg">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Notice Board */}
                    <div className="lg:col-span-5 bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] overflow-hidden border-t-[8px] border-secondary flex flex-col h-full">
                        {/* Notice Header */}
                        <div className="bg-primary p-6 lg:p-8 flex justify-between items-center text-white">
                            <h2 className="text-2xl font-black flex items-center gap-4 uppercase tracking-[0.1em] font-serif">
                                <Pin className="text-secondary rotate-45" size={28} />
                                Notice Board
                            </h2>
                            <Link href="#" className="text-[10px] font-black bg-white/10 hover:bg-white text-white hover:text-primary px-4 py-2 rounded-full transition-all border border-white/20 uppercase tracking-widest">
                                View Archives
                            </Link>
                        </div>

                        {/* Notice List Container */}
                        <div className="flex-1 relative overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>

                            <div className="h-[450px] overflow-hidden relative">
                                <div className="animate-vertical-scroll hover:pause-animation">
                                    {/* Duplicated list for seamless scroll */}
                                    {[...notices, ...notices].map((notice, i) => (
                                        <div key={i} className="px-8 py-6 border-b border-gray-50 hover:bg-gray-50/80 transition-all group cursor-pointer flex gap-5 items-start">
                                            <div className="mt-1 flex-shrink-0">
                                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <FileText size={20} />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-800 text-base lg:text-lg leading-tight group-hover:text-primary transition-colors mb-2">
                                                    {notice.title}
                                                </h4>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-xs font-black text-gray-400 uppercase tracking-wider">{notice.date}</span>
                                                    {notice.isNew && (
                                                        <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase animate-pulse">
                                                            New
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="self-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                                                <ChevronRight className="text-primary" size={20} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
