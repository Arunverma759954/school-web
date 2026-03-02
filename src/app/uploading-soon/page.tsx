"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Rocket, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UploadingSoonPage() {
    return (
        <main className="min-h-screen bg-[#111] flex flex-col">
            <Header />

            <section className="flex-1 flex items-center justify-center relative overflow-hidden pt-32 pb-20 px-4">
                {/* Animated Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-pulse delay-700" />

                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Icon/Visual Group */}
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                        y: [0, -10, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-32 h-32 bg-gradient-to-br from-primary to-secondary/50 rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(0,153,204,0.3)] border-2 border-white/20"
                                >
                                    <Rocket size={60} className="text-white drop-shadow-lg" />
                                </motion.div>
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-4 -right-4 bg-secondary text-primary p-2 rounded-full shadow-lg"
                                >
                                    <Clock size={24} strokeWidth={3} />
                                </motion.div>
                            </div>
                        </div>

                        {/* Heading with Glitch Effect */}
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-8xl font-serif font-black text-white uppercase tracking-tighter leading-none text-glitch text-glitch-anim">
                                Uploading <br />
                                <span className="text-secondary">Soon</span>
                            </h1>
                            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
                            We're currently preparing some exciting content for this section. Please check back later.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                            <Link
                                href="/"
                                className="group flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all shadow-2xl hover:scale-105 active:scale-95"
                            >
                                <Home size={20} />
                                Back to Home
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="flex items-center gap-2 text-white/60 hover:text-secondary font-bold uppercase tracking-widest text-sm transition-colors group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                Go Previous Page
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            </section>

            <Footer />
        </main>
    );
}
