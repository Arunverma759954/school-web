"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function PopupModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if popup has been shown in this session (optional, removing for now to show every time on reload as implied by user request)
        // const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

        // Show popup after a small delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // sessionStorage.setItem("hasSeenPopup", "true");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-[95%] max-w-4xl bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden mx-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Container - Responsive Height */}
                        <div className="relative w-full h-auto max-h-[80vh] md:max-h-[85vh] flex items-center justify-center bg-gray-100/50">
                            {/* 
                                USER INSTRUCTION: 
                                Please place your popup image in the 'public' folder 
                                and rename it to 'popup.jpg' (or update the src below).
                            */}
                            <img
                                src="/school.jpg"
                                alt="Announcement"
                                className="w-full h-full object-contain max-h-[80vh] md:max-h-[85vh]"
                                onError={(e) => {
                                    // Fallback if image not found
                                    e.currentTarget.src = "https://placehold.co/600x400?text=Please+Add+popup.jpg";
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
