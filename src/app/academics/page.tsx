"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { School, LibraryBooks, Psychology, WorkspacePremium, Groups, Science } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function AcademicsPage() {
    const wings = [
        {
            title: "Pre Primary Wing",
            grades: "Nursery, LKG, UKG",
            icon: <Groups className="text-4xl" />,
            desc: "Nurturing curiosity through the play-way method, focusing on sensory development, social interaction, and early literacy in a warm environment.",
        },
        {
            title: "Primary Wing",
            grades: "Grades I - V",
            icon: <Groups className="text-4xl" />,
            desc: "Building strong foundations in core subjects like English, Maths, and Science, while encouraging holistic development through arts and physical education.",
        },
        {
            title: "Middle Wing",
            grades: "Grades VI - VIII",
            icon: <School className="text-4xl" />,
            desc: "Emphasis on critical thinking, conceptual clarity, and exploration of diverse subjects and interests.",
        },

        {
            title: "Secondary",
            grades: "Grades IX - X",
            icon: <WorkspacePremium className="text-4xl" />,
            desc: "Specialized streams in Science, Commerce, and Humanities with a focus on career readiness and excellence.",
        },
    ];

    const streams = [
        { name: "Science", subjects: ["Physics", "Chemistry", "Biology/Maths", "Computer Science", "English"], icon: <Science /> },
        { name: "Commerce", subjects: ["Accountancy", "Business Studies", "Economics", "Applied Maths", "English"], icon: <WorkspacePremium /> },
        { name: "Humanities", subjects: ["History", "Political Science", "Geography", "Psychology/Sociology", "English"], icon: <Psychology /> },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-primary pt-[100px]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/IMG-20251214-WA0200.jpg"
                        alt="Academics"
                        className="w-full h-full object-cover opacity-20 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tighter"
                    >
                        Academic <span className="text-secondary">Excellence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-medium tracking-widest uppercase"
                    >
                        Cultivating Minds, Shaping Futures
                    </motion.p>
                </div>
            </section>

            {/* Curriculum Wings */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-black text-primary uppercase mb-4 tracking-tight">
                            Our <span className="text-secondary">Curriculum</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                            A holistic approach to education that balances academic rigor with creative expression and physical development.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {wings.map((wing, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:bg-primary group transition-all duration-500 shadow-lg"
                            >
                                <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">
                                    {wing.icon}
                                </div>
                                <h3 className="text-xl font-black text-primary group-hover:text-white mb-1 uppercase tracking-tight text-glitch">
                                    {wing.title}
                                </h3>
                                <p className="text-secondary text-sm font-bold mb-4 uppercase tracking-widest">
                                    {wing.grades}
                                </p>
                                <p className="text-gray-600 group-hover:text-white/70 text-sm leading-relaxed">
                                    {wing.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teaching Philosophy */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-serif font-black text-white uppercase leading-tight tracking-tighter">
                                Values-Based <br />
                                <span className="text-secondary">Education System</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed italic">
                                "Education is not the learning of facts, but the training of the mind to think."
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Inquiry Based Learning", desc: "Encouraging curiosity and independent research." },
                                    { title: "Moral Values", desc: "Integrating social and ethical responsibility." },
                                    { title: "Modern Pedagogy", desc: "Latest teaching methodologies and digital tools." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-sm text-white/50">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/Gallery/s3.jpeg" className="rounded-2xl shadow-2xl mt-8" alt="Values-based activity 1" />
                                <img src="/Gallery/s4.jpeg" className="rounded-2xl shadow-2xl" alt="Values-based activity 2" />
                            </div>
                            {/* <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-[100px] z-0" /> */}
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Call to Action */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-primary mb-8 uppercase tracking-tighter">
                        Preparing Students For <span className="text-secondary">Success</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join our community of learners and achievers. Admissions are open for the upcoming academic session.
                    </p>
                    <a
                        href="/admissions"
                        className="inline-block bg-primary text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-secondary hover:text-primary transition-all shadow-2xl hover:scale-105 active:scale-95"
                    >
                        Admissions Info
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
