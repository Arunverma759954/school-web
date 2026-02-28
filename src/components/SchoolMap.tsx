"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function SchoolMap() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-4">
                        <MapPin size={14} className="text-[#FFCC00]" />
                        <span className="text-primary font-black tracking-widest uppercase text-[10px]">
                            Find Our Location
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-primary mb-4 uppercase tracking-tight">
                        Visit Our Campus
                    </h2>
                    <div className="w-24 h-1 bg-[#FFCC00] mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative group h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden border-[8px] md:border-[12px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] ring-1 ring-[#FFCC00]/20"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.559917243077!2d84.00582777528025!3d21.87450447999502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20e69a30ed1be1%3A0xf0e5e61e65e629a4!2sSt.%20Joseph&#39;s%20Convent%20School!5e0!3m2!1sen!2sin!4v1772262218354!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                    ></iframe>

                    {/* View on Google Maps Button - Elite UI Overlay */}
                    <div className="absolute bottom-6 right-6 z-20">
                        <a
                            href="https://maps.google.com/?q=St.+Joseph's+Convent+School+Jharsuguda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-xl shadow-2xl border border-[#FFCC00] flex items-center gap-2 group/btn hover:bg-primary transition-all duration-300"
                        >
                            <MapPin size={16} className="text-[#FFCC00]" />
                            <span className="text-[11px] font-black text-primary group-hover/btn:text-white uppercase tracking-widest leading-none">View on Google Maps</span>
                        </a>
                    </div>

                    {/* Decorative Corner Overlays */}
                    <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white via-white/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white via-white/30 to-transparent pointer-events-none" />
                </motion.div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                        Opp. B. T. M. JHARSUGUDA, ODISHA-768203
                    </p>
                </div>
            </div>
        </section>
    );
}
