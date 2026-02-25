"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

type GalleryItem = {
    src: string;
    title: string;
    category: string;
};

const galleryItems: GalleryItem[] = [
    {
        src: "/13.webp",
        title: "Cultural Evening Performance",
        category: "Cultural Events",
    },
    {
        src: "/14.webp",
        title: "Independence Day Celebration",
        category: "National Days",
    },
    {
        src: "/15.webp",
        title: "Classroom Activity",
        category: "Academics",
    },
    {
        src: "/16.webp",
        title: "Art & Craft Exhibition",
        category: "Art & Craft",
    },
    {
        src: "/18.webp",
        title: "Sports Day March Past",
        category: "Sports",
    },
    {
        src: "/19.webp",
        title: "Science Lab Practical",
        category: "Labs",
    },
    {
        src: "/IMG-20251214-WA0200.jpg",
        title: "Eco Club Plantation Drive",
        category: "Eco Club",
    },
    {
        src: "/IMG-20251214-WA0201.jpg",
        title: "Morning Assembly",
        category: "Campus Life",
    },
    {
        src: "/IMG-20251214-WA0206.jpg",
        title: "Junior Wing Activity",
        category: "Junior Wing",
    },
    {
        src: "/IMG-20251214-WA0208.jpg",
        title: "Senior Wing Event",
        category: "Senior Wing",
    },
    {
        src: "/IMG-20251214-WA0209.jpg",
        title: "Talent Show",
        category: "Cultural Events",
    },
    {
        src: "/IMG-20251214-WA0210.jpg",
        title: "Field Activity",
        category: "Outdoor",
    },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero section */}
            <section className="pt-32 pb-10 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <p className="text-xs md:text-sm font-black tracking-[0.35em] uppercase text-secondary mb-3">
                            School Gallery
                        </p>
                        <h1 className="text-3xl md:text-5xl font-serif font-black text-primary mb-4 uppercase tracking-[0.15em]">
                            Moments at St. Joseph&apos;s
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                            A glimpse into the vibrant student life, celebrations, classrooms, labs and co-curricular
                            activities that make our campus a joyful place to learn and grow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery grid */}
            <section className="pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={item.src}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="group relative overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,0.18)] bg-black"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col gap-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/90 text-primary text-[10px] font-black uppercase tracking-[0.2em] w-fit">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white font-serif font-black text-lg md:text-xl leading-snug drop-shadow-md">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

