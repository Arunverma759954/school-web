"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Calendar,
    User,
    GraduationCap,
    ChevronDown,
    Map
} from "lucide-react";

const faqs = [
    {
        question: "When do admissions for the session 2026-27 start?",
        answer: "Admissions for the upcoming session 2026-27 are currently open for all classes from Nursery to Class IX and for Class XI. You can fill out the enquiry form online or visit the school office for prospectus and registration."
    },
    {
        question: "What documents are required for admission?",
        answer: "Primary documents required include: Birth Certificate, Previous school's Progress Report (for Class II and above), Transfer Certificate (TC), Aadhaar Card of child & parents, and 2 passport-size photographs."
    },
    {
        question: "What are the school office hours for visitors?",
        answer: "The school administrative office is open Monday to Friday from 8:00 AM to 2:00 PM and on Saturdays from 8:00 AM to 12:00 Noon. We recommend scheduling an appointment via the enquiry form."
    },
    {
        question: "Does the school provide transport facilities?",
        answer: "Yes, the school maintains a fleet of well-managed buses covering all major locations in Jharsuguda and surrounding areas. For specific route details, please contact the transport desk at the school."
    }
];

export default function EnquiryPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-[#fcfcfd]">
            <Header />

            {/* --- Premium Hero Section --- */}
            <section className="relative pt-44 pb-32 overflow-hidden bg-navbar">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523050853064-dbad350e02ee?auto=format&fit=crop&q=80"
                        alt="School Campus"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navbar via-navbar/80 to-[#fcfcfd]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-xs font-black uppercase tracking-[0.3em] mb-6">
                            Connect Excellence
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 leading-[1.1]">
                            Let's Begin Your <br />
                            <span className="text-secondary drop-shadow-sm italic">Educational Journey</span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Whether you're seeking admissions or have a general query, our dedicated team is here to provide all the information you need to make the best choice for your child's future.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-1 left-0 w-full h-24 bg-gradient-to-t from-[#fcfcfd] to-transparent" />
            </section>

            {/* --- Quick Contact Cards --- */}
            <section className="-mt-16 relative z-20 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <MapPin className="w-6 h-6" />, label: "Visit Us", value: "St. Joseph's Convent School, Jharsuguda, Odisha", color: "bg-blue-500" },
                            { icon: <Phone className="w-6 h-6" />, label: "Call Us", value: "06645-270748 / 49", color: "bg-amber-500" },
                            { icon: <Mail className="w-6 h-6" />, label: "Email Us", value: "info@stjosephsjsg.edu.in", color: "bg-emerald-500" },
                            { icon: <Clock className="w-6 h-6" />, label: "Office Hours", value: "Mon-Sat: 8:00 AM - 2:00 PM", color: "bg-rose-500" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-5 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                                    <p className="text-gray-800 font-bold leading-snug">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Main Content: Form & Map --- */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-5 gap-16 items-start">

                        {/* Left Side: Enquiry Form (3 columns) */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full -ml-16 -mb-16 blur-3xl" />

                                <div className="relative z-10">
                                    <div className="mb-10">
                                        <h2 className="text-3xl md:text-4xl font-serif font-black text-primary mb-3">Admission Enquiry</h2>
                                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Session 2026-27 Registration</p>
                                    </div>

                                    <form className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                                                    <User size={14} className="text-primary" /> Parent's Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-100 px-0 py-3 text-sm focus:border-primary outline-none transition-all placeholder:text-gray-300 font-medium"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                                                    <User size={14} className="text-primary" /> Student's Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Alex Doe"
                                                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-100 px-0 py-3 text-sm focus:border-primary outline-none transition-all placeholder:text-gray-300 font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                                                    <Mail size={14} className="text-primary" /> Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="parent@example.com"
                                                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-100 px-0 py-3 text-sm focus:border-primary outline-none transition-all placeholder:text-gray-300 font-medium"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                                                    <Phone size={14} className="text-primary" /> Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="+91-0000000000"
                                                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-100 px-0 py-3 text-sm focus:border-primary outline-none transition-all placeholder:text-gray-300 font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                                                    <GraduationCap size={14} className="text-primary" /> Class Applying For
                                                </label>
                                                <select className="w-full bg-gray-50 border-0 border-b-2 border-gray-100 px-0 py-3 text-sm focus:border-primary outline-none transition-all font-medium appearance-none">
                                                    <option>Select Class</option>
                                                    <option>Nursery / KG</option>
                                                    <option>Class I - V</option>
                                                    <option>Class VI - VIII</option>
                                                    <option>Class IX - X</option>
                                                    <option>Class XI - XII</option>
                                                </select>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                                                    <Calendar size={14} className="text-primary" /> Preferred Interaction
                                                </label>
                                                <select className="w-full bg-gray-50 border-0 border-b-2 border-gray-100 px-0 py-3 text-sm focus:border-primary outline-none transition-all font-medium appearance-none">
                                                    <option>Campus Visit</option>
                                                    <option>Phone Interview</option>
                                                    <option>Video Counsel</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
                                                <MessageSquare size={14} className="text-primary" /> Your Message
                                            </label>
                                            <textarea
                                                rows={3}
                                                placeholder="Tell us about your child's interests or any specific queries..."
                                                className="w-full bg-gray-50 border-0 border-b-2 border-gray-100 px-0 py-3 text-sm focus:border-primary outline-none transition-all placeholder:text-gray-300 font-medium resize-none"
                                            ></textarea>
                                        </div>

                                        <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl hover:bg-navbar hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95 group">
                                            Submit Request <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>

                                        <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                                            By submitting, you agree to receive school-related <br /> updates on your contact details.
                                        </p>
                                    </form>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Info & Map (2 columns) */}
                        <div className="lg:col-span-2 space-y-10">
                            {/* FAQ Snippet */}
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100">
                                <h3 className="text-2xl font-serif font-black text-primary mb-6">Common Questions</h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="border-b border-gray-50 last:border-0 pb-4">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                                className="w-full flex items-center justify-between text-left group"
                                            >
                                                <span className={`text-sm font-bold transition-colors ${openFaq === idx ? "text-primary" : "text-gray-700 group-hover:text-primary"}`}>
                                                    {faq.question}
                                                </span>
                                                <ChevronDown size={16} className={`text-gray-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                                            </button>
                                            {openFaq === idx && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="text-gray-500 text-sm mt-3 leading-relaxed"
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location View */}
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border-[12px] border-white">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 pointer-events-none" />
                                <div className="absolute top-6 left-6 z-20 flex flex-col gap-1">
                                    <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                        <Map size={14} /> View Location
                                    </div>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.440264024316!2d84.0041846!3d21.8415777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da941a87799%3A0xc39527ec3d906f34!2sSt.%20Joseph's%20Convent%20Higher%20Secondary%20School%2C%20Jharsuguda!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Bottom CTA Section --- */}
            <section className="py-24 bg-navbar relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-ping duration-[10s]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-8">
                            Experience Excellence First-Hand
                        </h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed">
                            We encourage parents to visit our campus and interact with our teaching faculty to witness the environment we provide for our students' holistic development.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-secondary text-primary font-black uppercase tracking-widest text-sm rounded-full shadow-2xl hover:bg-white hover:-translate-y-1 transition-all active:scale-95">
                                Schedule Campus Tour
                            </button>
                            <a href="tel:06645270748" className="px-10 py-5 bg-white/5 border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
                                <Phone size={18} className="text-secondary" /> Direct Call
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
