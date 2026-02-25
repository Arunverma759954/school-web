"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target, Heart, Globe, Lamp, Sparkles, Compass } from "lucide-react";

export default function MissionVisionPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-primary pt-24 pb-16">
                <div className="absolute inset-0 z-0">
                    <img src="/12.webp" alt="" className="w-full h-full object-cover opacity-15 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <Link href="/#about" className="inline-flex items-center gap-2 text-[#FFD700] font-bold text-xs uppercase tracking-[0.2em] hover:text-white transition-colors mb-8">
                        <ArrowLeft size={16} /> Back to About
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-black text-white mb-3 uppercase tracking-tight"
                    >
                        Mission & Vision
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-[#FFD700] text-lg md:text-xl font-semibold tracking-[0.2em] uppercase"
                    >
                        Light to Enlighten
                    </motion.p>
                    <div className="w-20 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full" />
                </div>
            </section>

            {/* Vision & Philosophy - Card */}
            <section className="py-16 md:py-24 bg-gray-50 relative">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(128,0,0,0.03)_50%,transparent_100%)]" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
                    >
                        <div className="bg-primary text-white px-8 md:px-12 py-6 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                <Target className="w-7 h-7" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-serif font-black uppercase tracking-tight">Vision and Philosophy</h2>
                                <p className="text-white/90 text-sm mt-1 tracking-wider">Our guiding principle</p>
                            </div>
                        </div>
                        <div className="p-8 md:p-12">
                            <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                                The school operates under the guiding principle of being a <span className="text-primary font-bold">&quot;light to enlighten young minds&quot;</span>. Its core mission is to:
                            </p>
                            <div className="grid md:grid-cols-1 gap-6">
                                {[
                                    { icon: Heart, title: "Mould Holistic Individuals", text: "To develop students who are strong in character, excellent in manners, and balanced in their intellectual and physical potential." },
                                    { icon: Heart, title: "Inculcate Core Values", text: "To instil virtues of sacrifice, compassion, honesty, and respect for every living being." },
                                    { icon: Globe, title: "Promote Global Citizenship", text: "To prepare the coming generation to face global challenges with serenity and calmness, fostering a community that lives in truth, justice, peace, and harmony." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border-l-4 border-primary hover:bg-primary/5 transition-colors">
                                        <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-black text-primary text-lg mb-1">{item.title}</h3>
                                            <p className="text-gray-700 leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Management & Heritage + Images */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7"
                        >
                            <div className="inline-flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-[0.25em] mb-4">Heritage</div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black text-primary mb-6 uppercase tracking-tight">Management and Heritage</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                The school is a unit of the <strong className="text-primary">Kloster St. Trudpert Society</strong>, an organization with deep historical roots. The management is led by the <strong className="text-primary">Sisters of St. Joseph of St. Marc</strong>, who bring a spirit of dedicated service to the institution. The school&apos;s philosophy emphasizes that education is the greatest tool to eradicate social evils and that every child should be encouraged to discover their unique talents to the fullest.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 flex flex-col gap-4"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-xl ring-2 ring-primary/10 aspect-[4/3]">
                                <img src="/12.webp" alt="Campus" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-xl ring-2 ring-primary/10 aspect-[4/3]">
                                <img src="/21.webp" alt="School life" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Motto - Full width highlight */}
            <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-[100px]" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Lamp className="w-12 h-12 text-[#FFD700] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-serif font-black text-white uppercase tracking-tight mb-4">
                            Our Motto
                        </h2>
                        <p className="text-2xl md:text-3xl font-serif font-bold text-[#FFD700] mb-6">
                            Light to Enlighten
                        </p>
                        <p className="text-white/90 text-lg leading-relaxed">
                            At the heart of our school is a simple yet profound guiding principle. This motto is more than just a phrase; it is the heartbeat of our educational philosophy and the promise we make to every student who enters our gates.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Three Pillars - Cards */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-black text-xs uppercase tracking-[0.25em]">The Promise</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-black text-primary mt-2 uppercase tracking-tight">Three Pillars</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            { icon: Sparkles, title: "The Gift of Light", color: "bg-amber-500/10 text-amber-800 border-amber-500/30", text: "For us, \"Light\" represents the transformative power of education. It is the spark of curiosity that turns a lesson into a discovery. We believe that every child carries an inner light—a unique potential that we nurture through Intellectual Growth and Moral Integrity." },
                            { icon: Lamp, title: "The Power to Enlighten", color: "bg-primary/10 text-primary border-primary/30", text: "To \"Enlighten\" is an active verb; it is the responsibility our students take to carry their knowledge, empathy, and values into the world. Through Social Responsibility and Emotional Well-being, we prepare them to be beacons of hope and leaders of change." },
                            { icon: Compass, title: "A Lifelong Compass", color: "bg-emerald-500/10 text-emerald-800 border-emerald-500/30", text: "Our students learn to Receive the light (critical thinking, physical vitality), Reflect the light (integrity, resilience), and Radiate the light as \"achievers in life\" who make a positive, lasting impact on the world." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-3xl border-2 ${item.color} p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center mb-6 shadow-sm">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-serif font-black text-primary mb-4">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-sm">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* Lifelong Compass bullets */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                    >
                        <h4 className="font-black text-primary text-center mb-6 uppercase tracking-wider">When we say &quot;Light to Enlighten&quot;</h4>
                        <ul className="space-y-4">
                            {[
                                "Receive the light by mastering critical thinking and physical vitality.",
                                "Reflect the light by living with integrity and resilience.",
                                "Radiate the light by becoming \"achievers in life\" who make a positive, lasting impact on the world.",
                            ].map((line, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span className="text-gray-700 leading-relaxed">{line}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
