"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Shield, ChevronRight } from "lucide-react";

const sectionA = [{ title: "General Information", view: "#" }];

const sectionB = [
    { title: "Copies of Affiliation/ Upgradation Letter and Recent Extension of Affiliation", view: "#" },
    { title: "Copies of Societies/Trust/Company Registration/ Renewal Certificate, as applicable", view: "#" },
    { title: "Copy of No Objection Certificate issued, if applicable, by the State Govt/UT", view: "#" },
    { title: "Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable", view: "#" },
    { title: "Copy of Valid Building Safety Certificate as per the National Building Code", view: "#" },
    { title: "Copy of Valid Fire Safety Certificate issued by the competent authority", view: "#" },
    { title: "Copy of the DEO Certificate submitted by the school for Affiliation/Upgradation/Extension of Affiliation or Self Certification by school", view: "#" },
    { title: "Copies of Valid Water, Health and Sanitation Certificate", view: "#" },
];

const sectionC = [
    { title: "Fee Structure of the School", view: "#" },
    { title: "Annual Academic Calendar", view: "#" },
    { title: "List of School Management Committee", view: "#" },
    { title: "List of Parents Teachers Association (PTA) Members", view: "#" },
    { title: "Last Three Years Result of Board Examination as per application", view: "#" },
];

const sectionD = [{ title: "Staff (Teaching)", view: "#" }];

const sectionE = [{ title: "School Infrastructure", view: "#" }];

function DisclosureSection({
    letter,
    label,
    items,
    delay = 0,
}: {
    letter: string;
    label: string;
    items: { title: string; view: string }[];
    delay?: number;
}) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay }}
            className="group/card bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(128,0,0,0.08)] transition-shadow duration-500"
        >
            <div className="bg-primary px-6 md:px-10 py-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center font-black text-white text-xl shadow-inner">
                        {letter}
                    </span>
                    <div>
                        <h2 className="text-xl md:text-2xl font-serif font-black text-white uppercase tracking-tight">
                            {label}
                        </h2>
                        <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-0.5">
                            {items.length} {items.length === 1 ? "document" : "documents"}
                        </p>
                    </div>
                </div>
                <ChevronRight className="w-6 h-6 text-white/60 group-hover/card:text-white transition-colors hidden sm:block" />
            </div>
            <div className="divide-y divide-gray-100/80">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 md:px-10 py-5 hover:bg-primary/5 transition-all duration-300 group/item"
                    >
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                                {i + 1}
                            </span>
                            <div className="min-w-0">
                                <span className="text-gray-800 font-semibold text-sm md:text-base leading-snug group-hover/item:text-primary transition-colors line-clamp-2">
                                    {item.title}
                                </span>
                            </div>
                        </div>
                        {item.view === "#" ? (
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shrink-0 sm:ml-6 hover:bg-[#900] hover:shadow-lg transition-all duration-300 cursor-default"
                            >
                                View
                                <ExternalLink size={14} strokeWidth={2.5} />
                            </button>
                        ) : (
                            <a
                                href={item.view}
                                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shrink-0 sm:ml-6 hover:bg-[#900] hover:shadow-lg transition-all duration-300"
                            >
                                View
                                <ExternalLink size={14} strokeWidth={2.5} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

export default function MandatoryDisclosurePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative min-h-[42vh] flex items-center justify-center overflow-hidden bg-primary pt-24 pb-16">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/12.webp"
                        alt=""
                        className="w-full h-full object-cover opacity-[0.08] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[#500000]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,215,0,0.15),transparent)]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-20 h-20 mt-8 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20">
                            <Shield className="w-10 h-10 text-[#FFD700]" />
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-4xl md:text-6xl font-serif font-black text-white mb-3 uppercase tracking-tight drop-shadow-sm"
                    >
                        Mandatory Disclosure
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-white/90 text-base md:text-xl tracking-wide max-w-xl mx-auto font-medium"
                    >
                        Documents and information as per CBSE affiliation norms
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.35, duration: 0.4 }}
                        className="w-20 h-1 bg-[#FFD700] mx-auto mt-8 rounded-full origin-center"
                    />
                </div>
            </section>

            {/* Content */}
            <section className="py-20 md:py-28 bg-gray-50 relative -mt-1">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="max-w-6xl mx-auto space-y-8">
                        <DisclosureSection letter="A" label="General Information" items={sectionA} delay={0} />
                        <DisclosureSection letter="B" label="Documents and Information" items={sectionB} delay={0.05} />
                        <DisclosureSection letter="C" label="Result and Academics" items={sectionC} delay={0.1} />
                        <DisclosureSection letter="D" label="Staff (Teaching)" items={sectionD} delay={0.15} />
                        <DisclosureSection letter="E" label="School Infrastructure" items={sectionE} delay={0.2} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
