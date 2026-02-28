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
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl md:text-4xl font-serif font-black text-primary mb-8 uppercase tracking-tight border-b-2 border-primary/10 pb-4">
                                    Message from Principal
                                </h2>

                                <p className="italic border-l-4 border-primary pl-6 font-serif text-xl text-primary/90 mb-10">
                                    &quot;Education is not the filling of a pail, but the lighting of a fire.&quot;
                                </p>

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
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                                    May St. Joseph, our Patron, continue to guide and protect our school family.
                                </p>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="font-black text-primary text-lg">Sr. Pushpika</p>
                                    <p className="text-gray-600 font-bold text-sm uppercase tracking-wider">Principal</p>
                                    <p className="text-gray-500 text-xs font-semibold">St. Joseph&apos;s Convent School, Jharsuguda</p>
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
