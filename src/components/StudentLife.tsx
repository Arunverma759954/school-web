"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
    {
        title: "ACADEMICS",
        image: "/image1.jpg",
    },
    {
        title: "SPORTS",
        image: "/image2.jpg",
    },
    {
        title: "CO-CURRICULAR",
        secondLine: "ACTIVITIES",
        image: "/image3.jpg",
    },
    {
        title: "ECO CLUB",
        image: "/image4.jpg",
    },
    {
        title: "WINTER CARNIVAL",
        image: "/image6.jpg",
    },
    {
        title: "COMPETITIONS",
        image: "/image7.jpg",
    },
    {
        title: "CELEBRATIONS",
        image: "/image5.jpg",
    },
];

export default function StudentLife() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
    };

    return (
        <section id="activities" className="py-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative group/section">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-4 uppercase tracking-[0.2em]">
                            Student Life
                        </h2>
                        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                {/* Slider Container Wrapper with Navigation Buttons */}
                <div className="relative">
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-xl text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover/section:opacity-100 hidden md:block"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-xl text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover/section:opacity-100 hidden md:block"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={28} />
                    </button>

                    <div
                        ref={sliderRef}
                        className="flex overflow-x-auto gap-8 pb-12 px-4 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0 w-80 md:w-80 snap-center group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] border-[8px] border-white ring-1 ring-gray-100 cursor-pointer bg-gray-100 transition-all duration-500 hover:-translate-y-3"
                            >
                                {/* Image */}
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                                />

                                {/* Gradient Overlay - Stronger on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-8 text-center flex flex-col justify-end items-center h-full transform transition-transform duration-500">
                                    <h3 className="text-3xl font-serif font-black text-white leading-none tracking-wider uppercase drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                                        {activity.title}
                                        {activity.secondLine && <span className="block mt-1 text-2xl text-[#FFCC00]">{activity.secondLine}</span>}
                                    </h3>

                                    {/* Animated Gold Line Indicator */}
                                    <div className="w-12 h-1.5 bg-[#FFCC00] mx-auto mt-6 rounded-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-center shadow-[0_0_10px_#FFCC00]"></div>

                                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        View Gallery
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}
