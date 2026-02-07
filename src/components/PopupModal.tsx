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

                    {/* Modal Content - Shrink wrapped to image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl bg-transparent"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 z-50 p-2 bg-black/60 text-white rounded-full hover:bg-red-600 transition-colors backdrop-blur-sm"
                        >
                            <X size={20} />
                        </button>

                        {/* Image - Auto dimensions to fit content */}
                        <img
                            src="/school.jpg"
                            alt="Announcement"
                            className="w-auto h-auto max-w-full max-h-[90vh] object-contain block"
                            onError={(e) => {
                                e.currentTarget.src = "https://placehold.co/600x600?text=Popup+Image";
                            }}
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
