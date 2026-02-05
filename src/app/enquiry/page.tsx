"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function EnquiryPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <section className="flex-grow pt-32 pb-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-t-8 border-primary"
                    >
                        <h1 className="text-4xl font-serif font-bold text-primary mb-2 text-center">Admission Enquiry</h1>
                        <p className="text-center text-gray-600 mb-8">Session 2026-27</p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Parent's Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter Full Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Student's Name</label>
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
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Any specific requirements..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-red-900 transition-colors shadow-lg text-lg">
                                Submit Enquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
