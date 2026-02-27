"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Shield, ChevronRight, FileText } from "lucide-react";

const documents = [
    { title: "Copies of Affiliation / Upgradation Letter and Recent Extension of Affiliation", view: "/CBSE Affiliation.pdf" },
    { title: "Copies of Building Safety Certificate", view: "/Building Safety Certificate.pdf" },
    { title: "Copies of Governing Body Members", view: "/Governing Body Members.pdf" },
    { title: "Copies of Health and Sanitation Certificate", view: "/Health and Sanitation.pdf" },
    { title: "Copies of NOC", view: "/NOC.pdf" },
    { title: "List of PTA Members", view: "/PTA Members.pdf" },
    { title: "Copies of Recognition Certificate", view: "/Recognition Certificate.pdf" },
    { title: "Copies of Salary Sheet", view: "/Salary Sheet.pdf" },
    { title: "List of School Managing Committee (2025–2026)", view: "/SMC.pdf" },
    { title: "Copies of Self Declaration", view: "/Self Declaration.pdf" },
    { title: "Copies of Society Registration", view: "/Society Registration.pdf" },
    { title: "Copies of Water and Sanitation Certificate", view: "/water and sanitation 1.pdf" },
    { title: "Copies of Water Testing Laboratory", view: "/Water certificate.pdf" },
];

function DocumentRow({ index, title, view }: { index: number; title: string; view: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 md:px-10 py-6 hover:bg-gray-50/80 transition-all duration-300 group border-b border-gray-100 last:border-0 relative overflow-hidden"
        >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

            <div className="flex items-center gap-5 flex-1 min-w-0">
                <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <FileText size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[10px] font-black text-primary">
                        {index + 1}
                    </span>
                </div>
                <h3 className="text-gray-800 font-bold text-sm md:text-base leading-snug group-hover:text-primary transition-colors duration-300 max-w-2xl">
                    {title}
                </h3>
            </div>

            <a
                href={view}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest shrink-0 sm:ml-6 hover:bg-[#900] hover:shadow-[0_8px_20px_-5px_rgba(196,9,2,0.4)] active:scale-95 transition-all duration-300"
            >
                View Document
                <ExternalLink size={14} strokeWidth={2.5} />
            </a>
        </motion.div>
    );
}

export default function MandatoryDisclosurePage() {
    return (
        <main className="min-h-screen bg-[#fafafa]">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary pt-20">
                <div className="absolute inset-0 z-0">
                    <img src="/12.webp" alt="" className="w-full h-full object-cover opacity-[0.12] scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-[#500000]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,215,0,0.15),transparent_50%)]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/20 relative group">
                            <div className="absolute inset-0 bg-[#FFD700]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            <Shield className="w-12 h-12 text-[#FFD700] relative z-10 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tight drop-shadow-md"
                    >
                        Mandatory Disclosure
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex items-center justify-center gap-3 text-[#FFD700] text-sm md:text-base font-bold uppercase tracking-[0.2em]"
                    >
                        <span className="w-8 h-px bg-[#FFD700]/40" />
                        CBSE Compliance 2025–2026
                        <span className="w-8 h-px bg-[#FFD700]/40" />
                    </motion.div>
                </div>

                {/* Decorative Bottom Wave/Curve */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#fafafa] clip-path-curve" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
            </section>

            {/* Documents List Section */}
            <section className="pb-32 -mt-10 relative z-20">
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="max-w-5xl mx-auto">

                        {/* Stats/Header Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-wrap items-center justify-between gap-6 mb-10"
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-[0_8px_20px_-5px_rgba(196,9,2,0.4)]">
                                    <FileText className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-serif font-black text-primary uppercase tracking-tight">
                                        Documents & Information
                                    </h2>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-0.5">
                                        Public disclosure as per CBSE norms
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-4xl font-serif font-black text-primary/10 leading-none">
                                    {documents.length < 10 ? `0${documents.length}` : documents.length}
                                </span>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Total Files</p>
                            </div>
                        </motion.div>

                        {/* Documents Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden"
                        >
                            <div className="divide-y divide-gray-50">
                                {documents.map((doc, i) => (
                                    <DocumentRow key={i} index={i} title={doc.title} view={doc.view} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Footer Verification Note */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mt-12 mb-8"
                        >
                            <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto">
                                The above documents are verified by the school administration and comply with the latest CBSE mandatory disclosure requirements.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
}
