"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const events = [
    {
        title: "Farewell Party",
        subtitle: "FOR CLASS XII",
        date: "FEB 03, 2026",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop",
        borderColor: "border-red-500",
    },
    {
        title: "Winter Carnival",
        subtitle: "FUN & FROLIC",
        date: "JAN 23, 2026",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1470&auto=format&fit=crop",
        borderColor: "border-blue-500",
    },
    {
        title: "Inter House",
        subtitle: "ENGLISH PLAY COMPETITION",
        date: "JAN 29, 2026",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1470&auto=format&fit=crop",
        borderColor: "border-purple-500",
    },
];

export default function RecentActivities() {
    return (
        <section id="activities" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-4 uppercase tracking-[0.2em]">
                            Recent Activities
                        </h2>
                        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
                        <Link href="#" className="group flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-sm hover:text-primary transition-colors">
                            View All News
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 border-b-[6px] ${event.borderColor}`}
                        >
                            {/* Image Section */}
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                                {/* Date Badge Overlay */}
                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/95 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
                                        <p className="text-[10px] font-black text-primary tracking-widest uppercase">
                                            {event.date}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 text-center flex flex-col items-center h-full">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Calendar size={20} className="text-secondary group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-serif font-black text-primary mb-2 tracking-tight group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-xs font-black text-secondary tracking-[0.2em] mb-6">
                                    {event.subtitle}
                                </p>

                                <button className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary">
                                    Read Highlights <ChevronRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background design elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}
