"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function EnquiryPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <section className="grow pt-32 pb-20 bg-[#0a0f1a] relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left: Contact info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-white/10"
                        >
                            <h2 className="text-2xl font-serif font-bold text-[#FFD700] mb-8">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-[#FFD700]" size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-1 tracking-wide">Address</p>
                                        <p className="text-white/70 leading-relaxed">St. Joseph&apos;s Convent School, Jharsuguda, Odisha</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-[#FFD700]" size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-1 tracking-wide">Phone</p>
                                        <p className="text-white/70">Contact school office for enquiries</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-[#FFD700]" size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-1 tracking-wide">Email</p>
                                        <p className="text-white/70">Reach out via the enquiry form</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-white/50 text-sm italic">
                                    "Education is the most powerful weapon which you can use to change the world."
                                </p>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-white/10"
                        >
                            <h1 className="text-3xl font-serif font-bold text-[#FFD700] mb-2 uppercase tracking-wide">Admission Enquiry</h1>
                            <p className="text-white/60 mb-8 font-medium">Session 2026-27</p>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-black text-[#FFD700] uppercase tracking-widest mb-2.5">Parent&apos;s Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 px-4 py-3.5 rounded-lg border border-white/10 text-white placeholder:text-white/20 focus:border-[#FFD700] focus:bg-white/10 focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                                            placeholder="Enter Full Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-[#FFD700] uppercase tracking-widest mb-2.5">Student&apos;s Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 px-4 py-3.5 rounded-lg border border-white/10 text-white placeholder:text-white/20 focus:border-[#FFD700] focus:bg-white/10 focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                                            placeholder="Enter Full Name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-[#FFD700] uppercase tracking-widest mb-2.5">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 px-4 py-3.5 rounded-lg border border-white/10 text-white placeholder:text-white/20 focus:border-[#FFD700] focus:bg-white/10 focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                                        placeholder="example@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-[#FFD700] uppercase tracking-widest mb-2.5">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-white/5 px-4 py-3.5 rounded-lg border border-white/10 text-white placeholder:text-white/20 focus:border-[#FFD700] focus:bg-white/10 focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-[#FFD700] uppercase tracking-widest mb-2.5">Class Applying For</label>
                                    <select className="w-full bg-white/5 px-4 py-3.5 rounded-lg border border-white/10 text-white focus:border-[#FFD700] focus:bg-white/10 focus:ring-1 focus:ring-[#FFD700] outline-none transition-all appearance-none cursor-pointer">
                                        <option className="bg-[#0a0f1a]">Select Class</option>
                                        <option className="bg-[#0a0f1a]">Nursery</option>
                                        <option className="bg-[#0a0f1a]">KG</option>
                                        <option className="bg-[#0a0f1a]">Class I</option>
                                        <option className="bg-[#0a0f1a]">Class II - V</option>
                                        <option className="bg-[#0a0f1a]">Class VI - VIII</option>
                                        <option className="bg-[#0a0f1a]">Class IX - XII</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-[#FFD700] uppercase tracking-widest mb-2.5">Message (Optional)</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 px-4 py-3.5 rounded-lg border border-white/10 text-white placeholder:text-white/20 focus:border-[#FFD700] focus:bg-white/10 focus:ring-1 focus:ring-[#FFD700] outline-none transition-all resize-none"
                                        placeholder="Any specific requirements..."
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-[#FFD700] text-[#004080] font-black py-4 rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] text-lg uppercase tracking-widest active:scale-95"
                                >
                                    Submit Enquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
