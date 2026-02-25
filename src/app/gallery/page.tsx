"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
    { src: "/1.webp", alt: "Campus" },
    { src: "/2.webp", alt: "School building" },
    { src: "/3.webp", alt: "Academic excellence" },
    { src: "/4.webp", alt: "Student life" },
    { src: "/17.webp", alt: "Academics" },
    { src: "/20.webp", alt: "Sports" },
    { src: "/21.webp", alt: "School activity" },
    { src: "/22.webp", alt: "Students event" },
    { src: "/23.webp", alt: "Values activity" },
    { src: "/24.webp", alt: "Classroom" },
    { src: "/25.webp", alt: "Co-curricular" },
    { src: "/29.webp", alt: "Eco club" },
    { src: "/a1.webp", alt: "Event" },
    { src: "/a2.webp", alt: "Event" },
    { src: "/a3.webp", alt: "Event" },
    { src: "/a4.webp", alt: "Event" },
];

export default function GalleryPage() {
    const [selected, setSelected] = useState<typeof galleryImages[0] | null>(null);

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-28 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-black text-primary uppercase tracking-[0.15em] mb-4">
                            Gallery
                        </h1>
                        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
                    </div>
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                    >
                        {galleryImages.map((item, i) => (
                            <motion.button
                                key={item.src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow focus:outline-none focus:ring-4 focus:ring-primary/40"
                                onClick={() => setSelected(item)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelected(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Close"
                            onClick={() => setSelected(null)}
                        >
                            <X size={28} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selected.src}
                            alt={selected.alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </main>
    );
}
