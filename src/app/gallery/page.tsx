"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    { src: "/Annualday.jpg", alt: "Annual Day Celebration", category: "Annual Function" },
    { src: "/IMG-20251214-WA0208.jpg", alt: "Annual Function Highlights 1", category: "Annual Function" },
    { src: "/IMG-20251214-WA0206.jpg", alt: "Annual Function Highlights 2", category: "Annual Function" },
    { src: "/IMG-20251214-WA0213.jpg", alt: "Annual Function Highlights 3", category: "Annual Function" },
    { src: "/IMG-20251214-WA0215.jpg", alt: "Annual Function Highlights 4", category: "Annual Function" },
    { src: "/IMG-20251214-WA0217.jpg", alt: "Annual Function Highlights 5", category: "Annual Function" },
    { src: "/Competition.jpg", alt: "Inter-school Competition", category: "Competition" },
    { src: "/1 (1).jpg", alt: "Competition Highlight 1", category: "Competition" },
    { src: "/1 (2).jpg", alt: "Competition Highlight 2", category: "Competition" },
    { src: "/1 (3).jpg", alt: "Competition Highlight 3", category: "Competition" },
    { src: "/1 (4).jpg", alt: "Competition Highlight 4", category: "Competition" },
    { src: "/1 (5).jpg", alt: "Competition Highlight 5", category: "Competition" },
    { src: "/1 (6).jpg", alt: "Competition Highlight 6", category: "Competition" },

    // Sports & Yoga
    { src: "/Sports-D.jpg", alt: "Sports Day Event", category: "Sports & Yoga" },
    { src: "/Yoga-Day.jpg", alt: "International Yoga Day", category: "Sports & Yoga" },
    { src: "/Yoga.webp", alt: "Yoga Practice", category: "Sports & Yoga" },
    { src: "/Spo.webp", alt: "Sports Activities", category: "Sports & Yoga" },

    // Campus Life
    { src: "/new1.jpeg", alt: "Campus Highlight 1", category: "Campus Life" },
    { src: "/2.webp", alt: "Campus Highlight 2", category: "Campus Life" },
    { src: "/3.webp", alt: "Campus Highlight 3", category: "Campus Life" },
    { src: "/Computerlabs.jpg", alt: "Computer Laboratory", category: "Campus Life" },

    // Student Activities
    { src: "/Students-Activities.jpg", alt: "Student Activities", category: "Student Activities" },
    { src: "/Girlstraining.jpg", alt: "Skills Training", category: "Girls Training" },
    { src: "/lab.webp", alt: "Lab Training", category: "Girls Training" },
    { src: "/fun-activity-for-student-classroom_1.jpg", alt: "Fun Activity Training", category: "Girls Training" },
    { src: "/a1.webp", alt: "Student Activity 1", category: "Student Activities" },
    { src: "/a2.webp", alt: "Student Activity 2", category: "Student Activities" },

    // Teachers & Events
    { src: "/Teachers-Day.jpg", alt: "Teachers Day Celebration", category: "Teachers & Events" },
    { src: "/Teachers-Picnic.jpg", alt: "Staff Picnic", category: "Teacher Picnic" },
    { src: "/10 (1).jpg", alt: "Picnic Highlight 1", category: "Teacher Picnic" },
    { src: "/10 (2).jpg", alt: "Picnic Highlight 2", category: "Teacher Picnic" },
    { src: "/10 (3).jpg", alt: "Picnic Highlight 3", category: "Teacher Picnic" },
    { src: "/10 (4).jpg", alt: "Picnic Highlight 4", category: "Teacher Picnic" },
    { src: "/10 (5).jpg", alt: "Picnic Highlight 5", category: "Teacher Picnic" },
    { src: "/10 (6).jpg", alt: "Picnic Highlight 6", category: "Teacher Picnic" },
    { src: "/10 (7).jpg", alt: "Picnic Highlight 7", category: "Teacher Picnic" },
    { src: "/10 (8).jpg", alt: "Picnic Highlight 8", category: "Teacher Picnic" },
    { src: "/10 (9).jpg", alt: "Picnic Highlight 9", category: "Teacher Picnic" },
    { src: "/10 (10).jpg", alt: "Picnic Highlight 10", category: "Teacher Picnic" },
    { src: "/10 (11).jpg", alt: "Picnic Highlight 11", category: "Teacher Picnic" },
    { src: "/10 (12).jpg", alt: "Picnic Highlight 12", category: "Teacher Picnic" },
    { src: "/10 (13).jpg", alt: "Picnic Highlight 13", category: "Teacher Picnic" },
    { src: "/Republic-Day.jpg", alt: "Republic Day Event", category: "Republic Day" },
    { src: "/32 (1).jpg", alt: "Republic Day Highlight 1", category: "Republic Day" },
    { src: "/32 (2).jpg", alt: "Republic Day Highlight 2", category: "Republic Day" },
    { src: "/32 (3).jpg", alt: "Republic Day Highlight 3", category: "Republic Day" },
    { src: "/32 (4).jpg", alt: "Republic Day Highlight 4", category: "Republic Day" },
    { src: "/32 (5).jpg", alt: "Republic Day Highlight 5", category: "Republic Day" },
    { src: "/32 (6).jpg", alt: "Republic Day Highlight 6", category: "Republic Day" },
    { src: "/32 (7).jpg", alt: "Republic Day Highlight 7", category: "Republic Day" },
    { src: "/32 (8).jpg", alt: "Republic Day Highlight 8", category: "Republic Day" },
    { src: "/32 (9).jpg", alt: "Republic Day Highlight 9", category: "Republic Day" },
    { src: "/32 (10).jpg", alt: "Republic Day Highlight 10", category: "Republic Day" },
    { src: "/32 (11).jpg", alt: "Republic Day Highlight 11", category: "Republic Day" },
    { src: "/32 (12).jpg", alt: "Republic Day Highlight 12", category: "Republic Day" },
    { src: "/32 (13).jpg", alt: "Republic Day Highlight 13", category: "Republic Day" },
    { src: "/32 (14).jpg", alt: "Republic Day Highlight 14", category: "Republic Day" },
    { src: "/32 (15).jpg", alt: "Republic Day Highlight 15", category: "Republic Day" },
    { src: "/32 (16).jpg", alt: "Republic Day Highlight 16", category: "Republic Day" },
    { src: "/32 (17).jpg", alt: "Republic Day Highlight 17", category: "Republic Day" },
    { src: "/32 (18).jpg", alt: "Republic Day Highlight 18", category: "Republic Day" },
    { src: "/Activities.webp", alt: "School Activities", category: "Teachers & Events" },
];

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const filtered =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    // When clicking an image: filter to its category, then open lightbox at index 0 within that category
    const handleImageClick = (clickedImg: GalleryImage) => {
        setActiveCategory(clickedImg.category);
        // After filtering, the image will be at its index within the filtered list
        const newFiltered = galleryImages.filter((img) => img.category === clickedImg.category);
        const newIndex = newFiltered.findIndex((img) => img.src === clickedImg.src);
        setSelectedIndex(newIndex !== -1 ? newIndex : 0);
    };

    const closeImage = () => setSelectedIndex(null);

    const currentFiltered =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    const prevImage = () =>
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + currentFiltered.length) % currentFiltered.length : null));
    const nextImage = () =>
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % currentFiltered.length : null));

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
                                onClick={() => { setActiveCategory(cat); setSelectedIndex(null); }}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-primary text-white border-primary shadow-md scale-105"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Active Category Label */}
                    <AnimatePresence>
                        {activeCategory !== "All" && (
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-center mb-8"
                            >
                                <span className="inline-block bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full border border-primary/20">
                                    📂 Showing: {activeCategory}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Image Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
                    >
                        <AnimatePresence>
                            {filtered.map((item, i) => (
                                <motion.div
                                    key={item.src + item.alt}
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.35, delay: i * 0.02 }}
                                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-shadow duration-500"
                                    onClick={() => handleImageClick(item)}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
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
                                    {/* Category pill */}
                                    <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.category}
                                    </div>
                                    {/* Click hint */}
                                    <div className="absolute bottom-3 right-3 bg-secondary text-primary text-[9px] font-black px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wide">
                                        View All
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

                        {/* Category label inside lightbox */}
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-secondary text-primary text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-10">
                            {activeCategory}
                        </div>

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
                                src={currentFiltered[selectedIndex].src}
                                alt={currentFiltered[selectedIndex].alt}
                                className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl"
                            />
                            {/* Caption */}
                            <div className="text-center">
                                <p className="text-white font-bold text-base uppercase tracking-widest">
                                    {currentFiltered[selectedIndex].alt}
                                </p>
                                <p className="text-white/50 text-xs uppercase tracking-wider mt-1">
                                    {currentFiltered[selectedIndex].category} &nbsp;·&nbsp; {selectedIndex + 1} / {currentFiltered.length}
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
