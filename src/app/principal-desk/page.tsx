"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrincipalDeskPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-28 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <Link href="/#about" className="inline-flex mt-5 items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-secondary transition-colors mb-10">
                        <ArrowLeft size={18} /> Back to About
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-6xl mx-auto bg-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                            <div className="bg-primary/5 p-8 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-gray-200">
                                <div className="w-48 h-48 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-2 ring-primary/20">
                                    <img src="/pri.webp" alt="Sr. Pushpika, Principal" className="w-full h-full object-cover object-top" />
                                </div>
                                <p className="font-black text-primary text-lg uppercase mt-4">Sr. Pushpika</p>
                                <p className="text-secondary font-bold text-xs uppercase tracking-widest mt-1">Principal</p>
                                <p className="text-gray-600 font-semibold text-sm mt-2">St. Joseph&apos;s Convent School, Jharsuguda</p>
                            </div>
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    It is with immense joy and a profound sense of gratitude that I welcome you to the official website of St. Joseph&apos;s Convent School, Jharsuguda.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    Our journey began in 2012 with a clear and divine mandate: to be a &quot;light to enlighten&quot;. What started as a humble beginning with just a handful of students and a few classrooms has, by the grace of God, blossomed into a sanctuary of learning under the aegis of the Kloster St. Trudpert Society.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    At St. Joseph&apos;s, we believe that every child is a unique spark of the Divine. Our mission goes beyond academic excellence; we are committed to the integral formation of young minds. In the spirit of the Sisters of St. Joseph of St. Marc, we strive to mould individuals who are not only intellectually competent but also emotionally balanced, morally upright, and socially responsible.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    In today&apos;s rapidly changing world, we aim to provide our students with the &quot;weapon of education&quot; to eradicate social evils and face global challenges with serenity and calmness. We focus on inculcating core values of sacrifice, compassion, and honesty, ensuring that our students grow to be harmonious citizens who contribute to making the world a better place.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    I invite our parents and well-wishers to partner with us in this noble task. Together, let us continue to nurture this &quot;light&quot; so that our students may shine brightly, illuminating their own paths and the lives of everyone they encounter.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                    May St. Joseph, our Patron, continue to guide and protect our school family.
                                </p>
                                <p className="italic border-l-4 border-primary pl-6 font-serif text-xl text-primary/90">
                                    &quot;Education is not the filling of a pail, but the lighting of a fire.&quot;
                                </p>

                                <div className="mt-10 pt-8 border-t border-gray-200">
                                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-3">Public Disclosure</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-2">ACUPUNCTURE / ACUPRESSURE · NAET Allergy Testing and Treatment · BACH FLOWER THERAPY · PAIN MANAGEMENT · VENESECTION</p>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-lg font-black text-primary uppercase tracking-wide mb-4">Modern Infrastructure and Facilities</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">While rooted in tradition, the school has evolved to meet modern educational standards:</p>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li><strong>Academic Excellence:</strong> As a CBSE-affiliated institution, we offer a comprehensive curriculum from pre-primary through secondary levels. Our medium of instruction is English, ensuring our students are prepared for the competitive global landscape.</li>
                                        <li><strong>Interactive Learning:</strong> The institution utilizes digital technology and interactive classes to enhance student engagement.</li>
                                        <li><strong>Qualified Faculty:</strong> Our team of experienced educators is dedicated to creating a nurturing and stimulating learning environment.</li>
                                        <li><strong>Comprehensive Facilities:</strong> The campus includes well-equipped laboratories, a library with advanced study materials, a playground, etc.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
