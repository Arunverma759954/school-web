"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Checklist, HowToReg, CalendarMonth, Assignment, Info } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function AdmissionsPage() {
    const admissionSteps = [
        {
            icon: <HowToReg className="text-4xl" />,
            title: "Registration",
            desc: "Submit the online enquiry form or visit the school office for the registration form.",
        },
        {
            icon: <Assignment className="text-4xl" />,
            title: "Documentation",
            desc: "Submit required documents including Birth Certificate, Transfer Certificate, and Report Cards.",
        },
        {
            icon: <Info className="text-4xl" />,
            title: "Interaction",
            desc: "A brief interaction with the student and parents to understand the child's needs.",
        },
        {
            icon: <Checklist className="text-4xl" />,
            title: "Confirmation",
            desc: "Finalize the admission by submitting the fees and completing the enrollment process.",
        },
    ];

    const documents = [
        "Self-attested copy of Birth Certificate",
        "Transfer Certificate (Original) from the previous school",
        "Last two years' Progress Report Cards",
        "Recent passport-size photographs (Student & Parents)",
        "Proof of Residence (Aadhar/Voter ID/Electricity Bill)",
        "SC/ST/OBC Certificate (if applicable)",
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-primary pt-[100px]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/image.jpg"
                        alt="Admissions"
                        className="w-full h-full object-cover opacity-30 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tighter"
                    >
                        Admissions <span className="text-secondary">2026-27</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-medium tracking-widest uppercase"
                    >
                        Begin Your Journey with St. Joseph's Convent School
                    </motion.p>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-black text-primary uppercase mb-4 tracking-tight">
                            Admission <span className="text-secondary">Process</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {admissionSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative group hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="text-primary group-hover:text-secondary transition-colors mb-6 inline-block">
                                    {step.icon}
                                </div>
                                <div className="absolute top-6 right-6 text-4xl font-black text-gray-100 group-hover:text-secondary/10 transition-colors">
                                    0{idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentation Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-black text-primary uppercase mb-8 tracking-tight">
                                Required <span className="text-secondary">Documents</span>
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Please ensure you have the following documents ready for the admission process. Original documents must be presented for verification.
                            </p>
                            <ul className="grid gap-4">
                                {documents.map((doc, idx) => (
                                    <li key={idx} className="flex gap-4 items-start group">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-secondary group-hover:bg-white" />
                                        </div>
                                        <span className="text-gray-700 font-bold text-sm tracking-wide">{doc}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 p-6 bg-primary/5 border-l-4 border-secondary rounded-r-xl">
                                <div className="flex gap-4">
                                    <Info className="text-secondary" />
                                    <div>
                                        <h4 className="font-bold text-primary mb-1 uppercase tracking-tight">Important Note</h4>
                                        <p className="text-sm text-gray-600">Candidates migrating from schools outside Odisha must get their Transfer Certificates countersigned by the Education Officer of the respective area.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="/image3.jpg"
                                    alt="Learning Environment"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ/CTA Section */}
            <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-8 uppercase tracking-tighter">
                        Still Have <span className="text-secondary">Questions?</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                        Our admissions team is here to help you. Reach out to us for more information or to schedule a campus tour.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="/enquiry"
                            className="bg-secondary text-primary px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl hover:scale-105"
                        >
                            Apply Now
                        </a>
                        <a
                            href="tel:06645-270748"
                            className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all shadow-2xl hover:scale-105"
                        >
                            Call Support
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
