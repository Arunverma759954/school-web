"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videoFeatures = [
    "Academic Excellence",
    "Moral Values",
    "Co-Ed Campus",
    "Christian Minority",
    "Sports Elite",
    "Artistic Growth",
];

export default function SchoolVideo() {
    return (
        <section id="video" className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Video Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] bg-black/40 cursor-pointer border-[8px] border-white/10">
                            {/* Cover Image */}
                            <img
                                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
                                alt="School Video Cover"
                                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                            {/* Prominent Play Button */}
                            <div className="relative z-10 w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(211,47,47,0.6)] group-hover:scale-110 transition-all duration-500">
                                <div className="absolute inset-0 rounded-full animate-ping bg-accent opacity-20"></div>
                                <Play size={40} fill="white" className="ml-1" />
                            </div>
                        </div>

                        {/* Virtual Tour Badge */}
                        <div className="absolute -bottom-4 -left-4 z-20 bg-secondary text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest shadow-2xl transform hover:-translate-y-1 transition-transform">
                            Virtual Tour
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-4xl lg:text-5xl font-serif font-black leading-tight">
                            Experience St. Joseph's Virtually
                        </h2>

                        <div className="space-y-8">
                            <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-medium">
                                Take a glimpse into the vibrant life at our campus. From state-of-the-art laboratories to our
                                collaborative learning spaces, discover an environment designed for holistic growth.
                            </p>

                            {/* Features Grid */}
                            <ul className="grid grid-cols-2 gap-y-6 gap-x-8">
                                {videoFeatures.map((item) => (
                                    <li key={item} className="flex items-center gap-4 group">
                                        <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_rgba(211,47,47,0.5)] group-hover:scale-125 transition-transform"></div>
                                        <span className="text-sm lg:text-base font-bold uppercase tracking-[0.1em] group-hover:text-secondary transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-12">
                            <button className="bg-accent text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 active:scale-95">
                                Watch Full Documentary
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
}
