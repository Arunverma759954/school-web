"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                            ESTABLISHED 1922
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-primary mb-8 leading-[1.1]">
                            Welcome to St. Joseph's Convent School
                        </h2>
                        <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
                            <p>
                                St. Joseph’s Convent School is established, run and managed by the
                                <span className="font-bold text-primary"> Kloster St. Trudpert society</span>,
                                a Christian minority institution. The sisters who are managing the institution is congregation of the St. Joseph of St. Marc sisters.
                            </p>
                            <p>
                                We are moulding the future of the families, society, country and the universe, being aware the world has become a global family in every spear of life. We need enlightened leaders, just and harmonious people for the present and for the future to live on this earth, to make this land a better place to live in.
                            </p>
                            <p className="italic border-l-4 border-primary pl-6 font-serif text-xl text-primary/90 leading-relaxed">
                                "Education is the greatest weapon to eradicate social evils" - We honestly commit ourselves to enlighten the coming generation in truth and justice.
                            </p>
                        </div>
                        <div className="mt-12">
                            <button className="border-2 border-primary text-primary px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                                Read More
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[12px] border-white">
                            <img
                                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop"
                                alt="St. Joseph's Convent School Architecture"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* Heritage Badge - Matching Screenshot */}
                        <div className="absolute -bottom-4 -left-4 z-20 bg-secondary px-8 py-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform">
                            <div className="text-4xl lg:text-5xl font-black font-serif text-white drop-shadow-md">60+ Years</div>
                            <div className="text-xs lg:text-sm font-bold text-white uppercase tracking-widest mt-1 opacity-90">
                                of Educational Heritage
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
