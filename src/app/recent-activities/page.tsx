"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
    {
        title: "Inter House Social Science Quiz",
        subtitle: "Classes III-IX & XI",
        date: "FEB 05, 2026",
        image: "/Gallery/Teachers-Events/a1.webp",
        borderColor: "border-red-500",
    },
    {
        title: "Farewell Party",
        subtitle: "For Class XII",
        date: "FEB 03, 2026",
        image: "/Gallery/Student-Activities/a2.webp",
        borderColor: "border-blue-500",
    },
    {
        title: "Inter House English Play",
        subtitle: "COMPETITION",
        date: "JAN 29, 2026",
        image: "/a3.webp",
        borderColor: "border-purple-500",
    },
    {
        title: "Happy Republic Day",
        subtitle: "CELEBRATION",
        date: "JAN 26, 2026",
        image: "/a4.webp",
        borderColor: "border-orange-500",
    },
];

export default function RecentActivitiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-28 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-black text-primary mb-4 uppercase tracking-[0.2em]">
                            Recent Activities
                        </h1>
                        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6" />
                        <Link
                            href="/"
                            className="group flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-sm hover:text-primary transition-colors"
                        >
                            Back to Home
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {events.map((event, index) => (
                            <motion.article
                                key={event.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-500 border-b-[6px] ${event.borderColor} hover:-translate-y-2 group`}
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-white/95 backdrop-blur px-3 py-1 rounded-full shadow-lg">
                                            <p className="text-[10px] font-black text-primary tracking-widest uppercase">
                                                {event.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                                        <Calendar size={20} className="text-secondary group-hover:text-white transition-colors" />
                                    </div>
                                    <h2 className="text-xl font-serif font-black text-primary mb-1 tracking-tight">
                                        {event.title}
                                    </h2>
                                    <p className="text-xs font-black text-secondary tracking-[0.2em]">
                                        {event.subtitle}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
