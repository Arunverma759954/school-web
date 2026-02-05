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

                    {/* Left: Principal's Desk */}
                    <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] border-t-[8px] border-primary relative overflow-hidden group">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-bl-full -z-0 transform group-hover:scale-110 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-serif font-black text-primary mb-10 flex items-center gap-4">
                                <span className="w-12 h-1.5 bg-secondary rounded-full"></span>
                                Principal's Desk
                            </h2>

                            <div className="flex flex-col md:flex-row gap-10 items-start">
                                {/* Principal Image */}
                                <div className="w-full md:w-2/5 shrink-0">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-500">
                                        <img
                                            src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1976&auto=format&fit=crop"
                                            alt="Principal Sr. Lilly Areekal Paul"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Principal Content */}
                                <div className="flex-1 space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-xl italic font-serif relative">
                                        <span className="text-5xl text-secondary/30 absolute -top-4 -left-6 font-serif">"</span>
                                        Education is not just about academic excellence, but about character building. At St. Joseph's, we strive to kindle the light of knowledge and wisdom in every heart.
                                        <span className="text-5xl text-secondary/30 absolute -bottom-8 right-0 font-serif">"</span>
                                    </p>

                                    <div className="pt-4">
                                        <h4 className="text-2xl font-black text-primary mb-1 font-serif">Sr. Lilly Areekal Paul</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Principal</span>
                                        </div>
                                    </div>

                                    <button className="mt-8 group flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:text-secondary transition-colors">
                                        Read Full Message
                                        <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center group-hover:border-secondary group-hover:translate-x-2 transition-all">
                                            <ArrowRight size={14} />
                                        </div>
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

            <style jsx>{`
                .animate-vertical-scroll {
                    animation: vertical-scroll 25s linear infinite;
                }
                .pause-animation:hover {
                    animation-play-state: paused;
                }
                @keyframes vertical-scroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
            `}</style>
        </section>
    );
}
