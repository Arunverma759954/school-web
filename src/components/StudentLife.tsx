"use client";

import React from "react";
import { motion } from "framer-motion";

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
];

export default function StudentLife() {
    return (
        <section id="activities" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 text-center mb-16">
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

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-[6px] border-white ring-1 ring-gray-100 cursor-pointer bg-gray-100"
                        >
                            {/* Image */}
                            <img
                                src={activity.image}
                                alt={activity.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-8 text-center flex flex-col justify-end items-center h-full">
                                <h3 className="text-2xl md:text-2xl font-serif font-black text-white leading-tight tracking-wider uppercase group-hover:translate-y-[-10px] transition-transform duration-500">
                                    {activity.title}
                                    {activity.secondLine && <span className="block mt-1">{activity.secondLine}</span>}
                                </h3>

                                {/* Subtle Gold Line Indicator */}
                                <div className="w-0 group-hover:w-12 h-1 bg-secondary mx-auto mt-4 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}
