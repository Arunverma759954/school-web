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
            <section className="grow pt-32 pb-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left: Contact info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-8 border-primary"
                        >
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
                            <div className="space-y-6 text-gray-700">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-primary" size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">Address</p>
                                        <p>St. Joseph&apos;s Convent School, Jharsuguda, Odisha</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-primary" size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">Phone</p>
                                        <p>Contact school office for enquiries</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-primary" size={22} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">Email</p>
                                        <p>Reach out via the enquiry form</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-8 border-secondary"
                        >
                            <h1 className="text-3xl font-serif font-bold text-primary mb-2">Admission Enquiry</h1>
                            <p className="text-gray-600 mb-8">Session 2026-27</p>
                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Parent&apos;s Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter Full Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Student&apos;s Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter Full Name" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="example@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Class Applying For</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                                        <option>Select Class</option>
                                        <option>Nursery</option>
                                        <option>KG</option>
                                        <option>Class I</option>
                                        <option>Class II - V</option>
                                        <option>Class VI - VIII</option>
                                        <option>Class IX - XII</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Any specific requirements..." />
                                </div>
                                <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-red-900 transition-colors shadow-lg text-lg">
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
