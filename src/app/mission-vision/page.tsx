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
                    <img src="/Gallery/mission.jpeg" alt="" className="w-full h-full object-cover opacity-15 scale-105" />
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

            {/* Established & History */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium italic">
                                &quot;Established in 2012, St. Joseph&apos;s Convent School, Jharsuguda, is a premier Christian minority educational institution managed by the Kloster St. Trudpert Society and the Sisters of St. Joseph of St. Marc (S.J.S.M.). From its inception, the school has been dedicated to moulding the future of families and society by developing enlightened leaders and harmonious citizens.&quot;
                            </p>
                            <div className="w-24 h-1 bg-primary/20 mx-auto mt-8 rounded-full" />
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative"
                        >
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center -rotate-12 border border-primary/20">
                                <Sparkles className="w-10 h-10 text-primary" />
                            </div>
                            <h2 className="text-3xl font-serif font-black text-primary mb-6 uppercase tracking-tight">Our Humble Beginnings (2012)</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    The journey of St. Joseph&apos;s Convent School began in 2012 with a modest start. Located in the urban area of the Jharsuguda MPL block, the school initially served a small number of students in its foundational years.
                                </p>
                                <p>
                                    Starting with just five classrooms, the institution was built on a vision to provide quality English-medium education to the local community. What began as a <span className="text-primary font-bold">&quot;humble beginning with a few students&quot;</span> has since grown into a vital educational hub in the District.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-primary/5 transition-transform duration-500 group-hover:scale-[1.02]">
                                <img src="/Gallery/mission.jpeg" alt="School Beginnings" className="w-full h-auto object-contain bg-gray-50 scale-100 group-hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                                <p className="text-primary font-black text-2xl">2012</p>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Year of Establishment</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Philosophy */}
            <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-4 uppercase tracking-[0.1em]">Vision and Philosophy</h2>
                            <p className="text-[#FFD700] text-lg font-bold tracking-[0.2em] uppercase">The guiding principle of being a &quot;light to enlighten young minds&quot;</p>
                            <div className="w-20 h-1.5 bg-[#FFD700] mx-auto mt-6 rounded-full" />
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            {
                                icon: Target,
                                title: "Mould Holistic Individuals",
                                text: "To develop students who are strong in character, excellent in manners, and balanced in their intellectual and physical potential."
                            },
                            {
                                icon: Heart,
                                title: "Inculcate Core Values",
                                text: "To instil virtues of sacrifice, compassion, honesty, and respect for every living being."
                            },
                            {
                                icon: Globe,
                                title: "Promote Global Citizenship",
                                text: "To prepare the coming generation to face global challenges with serenity and calmness, fostering a community that lives in truth, justice, peace, and harmony."
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#FFD700] flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(255,215,0,0.3)] group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-black text-[#FFD700] mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-white/90 leading-relaxed font-medium">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management & Heritage */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full text-primary font-black text-xs uppercase tracking-widest mb-6">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Heritage & Leadership
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-8 uppercase tracking-tight">Management and Heritage</h2>
                                <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
                                    <p>
                                        The school is a unit of the <strong className="text-primary font-black">Kloster St. Trudpert Society</strong>, an organization with deep historical roots. The management is led by the <strong className="text-primary font-black">Sisters of St. Joseph of St. Marc</strong>, who bring a spirit of dedicated service to the institution.
                                    </p>
                                    <p>
                                        The school&apos;s philosophy emphasizes that education is the greatest tool to eradicate social evils and that every child should be encouraged to discover their unique talents to the fullest.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                                    <img src="/IMG-20251214-WA0223.jpg" alt="Heritage" className="w-full h-full object-cover" />
                                </div>
                                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] translate-y-8">
                                    <img src="/IMG-20251214-WA0239.jpg" alt="Management" className="w-full h-full object-cover" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Motto Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Lamp className="w-16 h-16 text-primary mx-auto mb-8 animate-bounce" />
                            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary uppercase tracking-tight mb-4">Our Motto</h2>
                            <p className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-8">Light to Enlighten</p>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                                At the heart of our school is a simple yet profound guiding principle: Light to Enlighten. This motto is more than just a phrase; it is the heartbeat of our educational philosophy and the promise we make to every student who enters our gates.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* The Gift of Light */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-amber-50 flex items-center justify-center mb-8 border border-amber-100 group-hover:rotate-6 transition-transform">
                                <Sparkles className="w-10 h-10 text-amber-500" />
                            </div>
                            <h3 className="text-2xl font-serif font-black text-primary mb-6 uppercase tracking-tight">The Gift of Light</h3>
                            <p className="text-gray-600 leading-relaxed font-normal mb-6">
                                For us, &quot;Light&quot; represents the transformative power of education. It is the spark of curiosity that turns a lesson into a discovery. We believe that every child carries an inner light—a unique potential that we are committed to nurturing through our pillars of Intellectual Growth and Moral Integrity. By dispelling the &quot;darkness&quot; of ignorance and doubt, we provide students with the clarity and confidence to see their own worth.
                            </p>
                        </motion.div>

                        {/* The Power to Enlighten */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-primary p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(128,0,0,0.15)] flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8 border border-white/20 group-hover:rotate-6 transition-transform">
                                <Lamp className="w-10 h-10 text-[#FFD700]" />
                            </div>
                            <h3 className="text-2xl font-serif font-black text-[#FFD700] mb-6 uppercase tracking-tight">The Power to Enlighten</h3>
                            <p className="text-white/90 leading-relaxed font-normal mb-6">
                                True education does not end with the self. To &quot;Enlighten&quot; is an active verb; it is the responsibility our students take to carry their knowledge, empathy, and values into the wider world. Through Social Responsibility and Emotional Well-being, we prepare our students to be beacons of hope and leaders of change. A student who is enlightened does not just succeed in exams—they illuminate their communities.
                            </p>
                        </motion.div>

                        {/* A Lifelong Compass */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group md:col-span-2 lg:col-span-1"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center mb-8 border border-emerald-100 group-hover:rotate-6 transition-transform">
                                <Compass className="w-10 h-10 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-serif font-black text-primary mb-6 uppercase tracking-tight">A Lifelong Compass</h3>
                            <p className="text-gray-600 leading-relaxed font-normal mb-8 text-center w-full">
                                When we say &quot;Light to Enlighten,&quot; we are committed to a cycle of continuous growth. Our students learn to:
                            </p>
                            <ul className="space-y-4 text-left w-full">
                                {[
                                    { text: "Receive the light", detail: "by mastering critical thinking and physical vitality." },
                                    { text: "Reflect the light", detail: "by living with integrity and resilience." },
                                    { text: "Radiate the light", detail: "by becoming \"achievers in life\" who make a positive, lasting impact." },
                                ].map((bullet, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-sm text-gray-700 font-medium">
                                            <span className="text-emerald-700 font-black">{bullet.text}</span> {bullet.detail}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modern Infrastructure and Facilities */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr]">
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl font-serif font-black text-white mb-4 uppercase tracking-tight">Modern Infrastructure and Facilities</h2>
                            <p className="text-white/60 mb-10 text-lg">While rooted in tradition, the school has evolved to meet modern educational standards:</p>

                            <div className="grid gap-6">
                                {[
                                    { title: "Academic Excellence", text: "As a CBSE-affiliated institution, we offer a comprehensive curriculum from pre-primary through secondary levels. Our medium of instruction is English, ensuring our students are prepared for the competitive global landscape." },
                                    { title: "Interactive Learning", text: "The institution utilizes digital technology and interactive classes to enhance student engagement." },
                                    { title: "Qualified Faculty", text: "Our team of experienced educators is dedicated to creating a nurturing and stimulating learning environment." },
                                    { title: "Comprehensive Facilities", text: "The campus includes well-equipped laboratories, a library with advanced study materials, a playground etc." },
                                ].map((feat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex flex-col gap-1 border-l-2 border-[#FFD700] pl-6 py-1"
                                    >
                                        <h4 className="text-[#FFD700] font-black text-sm uppercase tracking-wider">{feat.title}</h4>
                                        <p className="text-white/80 text-sm leading-relaxed">{feat.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[400px]">
                            <img src="/33.webp" alt="Infrastructure" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent hidden lg:block" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
