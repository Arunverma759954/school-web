"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
    src: string;
    alt: string;
    category: string;
};

const galleryImages: GalleryImage[] = [
    // Annual Function
    { src: "/IMG-20251214-WA0200.jpg", alt: "Annual Function", category: "Annual Function" },
    { src: "/IMG-20251214-WA0206.jpg", alt: "Annual Function Performance", category: "Annual Function" },
    { src: "/IMG-20251214-WA0210.jpg", alt: "Annual Function Highlight", category: "Annual Function" },
    { src: "/IMG-20251214-WA0213.jpg", alt: "Annual Day Moment", category: "Annual Function" },


    // Sports & Yoga
    { src: "/IMG-20251214-WA0221.jpg", alt: "Sports Event", category: "Sports & Yoga" },
    { src: "/IMG-20251214-WA0225.jpg", alt: "Yoga Session", category: "Sports & Yoga" },
    { src: "/IMG-20251214-WA0227.jpg", alt: "Sports Day", category: "Sports & Yoga" },
    { src: "/IMG-20251214-WA0232.jpg", alt: "Physical Training", category: "Sports & Yoga" },


    // Campus Life
    { src: "/IMG-20251214-WA0236.jpg", alt: "School Campus", category: "Campus Life" },
    { src: "/IMG-20251214-WA0239.jpg", alt: "School Building", category: "Campus Life" },
    { src: "/IMG-20251214-WA0241.jpg", alt: "Campus View", category: "Campus Life" },
    { src: "/IMG-20251214-WA0243.jpg", alt: "School Infrastructure", category: "Campus Life" },


    // Student Activities
    { src: "/IMG-20251214-WA0247.jpg", alt: "Classroom Activity", category: "Student Activities" },
    { src: "/IMG-20251214-WA0249.jpg", alt: "Student Project", category: "Student Activities" },
    { src: "/IMG-20251214-WA0253.jpg", alt: "Group Activity", category: "Student Activities" },
    { src: "/IMG-20251214-WA0255.jpg", alt: "Student Engagement", category: "Student Activities" },


    // Teachers & Events
    { src: "/IMG-20251214-WA0266.jpg", alt: "School Celebration", category: "Teachers & Events" },
    { src: "/IMG-20251214-WA0269.jpg", alt: "School Programme", category: "Teachers & Events" },
    { src: "/IMG-20251214-WA0275.jpg", alt: "Staff Event", category: "Teachers & Events" },
    { src: "/IMG-20251214-WA0280.jpg", alt: "Award Ceremony", category: "Teachers & Events" },

];

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const filtered =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    const openImage = (index: number) => setSelectedIndex(index);
    const closeImage = () => setSelectedIndex(null);
    const prevImage = () =>
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
    const nextImage = () =>
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null));

    return (
        <main className="min-h-screen bg-[#f9f9f9]">
            <Header />

            <section className="pt-28 pb-20">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Page Heading */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-serif font-black text-primary uppercase tracking-[0.15em] mb-4">
                                Our Gallery
                            </h1>
                            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-4" />
                            <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
                                Moments that define us
                            </p>
                        </motion.div>
                    </div>

                    {/* Category Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2 mb-12"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-primary text-white border-primary shadow-md scale-105"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
                    >
                        <AnimatePresence>
                            {filtered.map((item, i) => (
                                <motion.div
                                    key={item.src}
                                    layout
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.35, delay: i * 0.03 }}
                                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-shadow duration-500"
                                    onClick={() => openImage(i)}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay with label */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                                        <span className="text-white text-xs font-bold uppercase tracking-widest drop-shadow-md leading-tight">
                                            {item.alt}
                                        </span>
                                        <span className="text-white/60 text-[10px] font-medium uppercase tracking-wider mt-0.5">
                                            {item.category}
                                        </span>
                                    </div>
                                    {/* Always-visible category pill */}
                                    <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.category}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filtered.length === 0 && (
                        <div className="text-center py-24 text-gray-400 text-sm uppercase tracking-widest">
                            No images found.
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={closeImage}
                    >
                        {/* Close */}
                        <button
                            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-10"
                            onClick={closeImage}
                            aria-label="Close"
                        >
                            <X size={22} />
                        </button>

                        {/* Prev */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            aria-label="Previous"
                        >
                            <ChevronLeft size={26} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col items-center gap-4 max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={filtered[selectedIndex].src}
                                alt={filtered[selectedIndex].alt}
                                className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl"
                            />
                            {/* Caption */}
                            <div className="text-center">
                                <p className="text-white font-bold text-base uppercase tracking-widest">
                                    {filtered[selectedIndex].alt}
                                </p>
                                <p className="text-white/50 text-xs uppercase tracking-wider mt-1">
                                    {filtered[selectedIndex].category} &nbsp;·&nbsp; {selectedIndex + 1} / {filtered.length}
                                </p>
                            </div>
                        </motion.div>

                        {/* Next */}
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            aria-label="Next"
                        >
                            <ChevronRight size={26} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
