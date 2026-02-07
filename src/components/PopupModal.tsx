"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function PopupModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a delay - giving users time to see the website first
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) {
            // Disable body scroll when popup is open
            document.body.style.overflow = "hidden";

            // Auto-close after 10 seconds
            const autoCloseTimer = setTimeout(() => {
                setIsOpen(false);
            }, 10000);

            return () => {
                document.body.style.overflow = "unset";
                clearTimeout(autoCloseTimer);
            };
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
                    {/* Backdrop - with blur effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 backdrop-blur-sm"
                        style={{ backgroundColor: "transparent" }}
                    />

                    {/* Modal Content - Fit content exactly, no bg to avoid borders */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-fit h-fit max-w-[90vw] max-h-[90vh] bg-transparent flex items-center justify-center p-0 m-0"
                    >
                        {/* Close Button - More prominent */}
                        <button
                            onClick={handleClose}
                            className="absolute -top-4 -right-4 z-[100001] p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-2xl border-2 border-white"
                        >
                            <X size={24} />
                        </button>

                        {/* Image - Rounded corners on image itself */}
                        <img
                            src="/school.jpg"
                            alt="Announcement"
                            className="block max-w-[90vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl border-none"
                            style={{ margin: 0, padding: 0 }}
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
