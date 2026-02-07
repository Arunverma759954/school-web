"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // Duration of the loading screen

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-4"
                >
                    {/* Background Decorative Rings */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute w-[500px] h-[500px] border-2 border-primary rounded-full"
                    />
                    <motion.div
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 0.05 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                        className="absolute w-[600px] h-[600px] border-2 border-primary rounded-full"
                    />

                    {/* Logo Container */}
                    <div className="relative mb-12">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-3 shadow-[0_20px_50px_rgba(0,64,128,0.2)] relative z-10 border-4 border-secondary overflow-hidden"
                        >
                            <img
                                src="/School-Logo-1.jpg"
                                alt="St. Joseph's Convent School Logo"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Spinner around logo */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border-2 border-transparent border-t-secondary border-b-secondary rounded-full opacity-20"
                        />
                    </div>

                    {/* Text and Progress */}
                    <div className="text-center relative z-10">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-2xl font-serif font-black text-[#004080] uppercase tracking-[0.3em] mb-2"
                        >
                            St. Joseph's
                        </motion.h2>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.6 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.5em] mb-8"
                        >
                            Convent School
                        </motion.p>

                        {/* Loading Bar */}
                        <div className="w-48 h-[2px] bg-gray-100 rounded-full mx-auto overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="absolute inset-0 bg-primary"
                            />
                        </div>
                    </div>

                    {/* Bottom Attribution */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-10 text-[9px] font-black uppercase tracking-[0.4em] text-primary"
                    >
                        ESTD. 1960
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
