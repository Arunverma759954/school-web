"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const images = [
    { src: "/Gallery/Campus-Life/new1.jpeg", alt: "Campus Highlight 1" },
    { src: "/Gallery/Teachers-Events/Activities.webp", alt: "Campus Highlight 2" },
    { src: "/3.webp", alt: "Campus Highlight 3" },
    { src: "/4.webp", alt: "Campus Highlight 4" },
    { src: "/10.webp", alt: "Campus Highlight 5" },
];

const TiltCard = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative aspect-video group cursor-pointer will-change-transform"
        >
            {/* Glossy Shadow Layer - Reduced blur for performance */}
            <div className="absolute inset-4 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-colors duration-500 -z-10" />

            <div
                style={{ transform: "translateZ(50px)" }}
                className="w-full h-full rounded-3xl overflow-hidden border-[6px] md:border-[10px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with Glossy Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Plus Icon at center with 3D Pop */}
                <div
                    style={{ transform: "translateZ(80px)" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="bg-white/95 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                        <span className="text-primary text-3xl font-black">+</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function CampusHighlights() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-[#FFCC00] font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                        Visual Experience
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-primary mb-6 uppercase tracking-tight">
                        Campus Highlights
                    </h2>
                    <div className="w-32 h-1.5 bg-[#FFCC00] mx-auto rounded-full"></div>
                </motion.div>

                {/* Symmetrical Professional Grid - 2 Top (col-span-3), 3 Bottom (col-span-2) */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
                    {/* Top Row: 2 Images (Large Impact) */}
                    <div className="md:col-span-3">
                        <TiltCard src={images[0].src} alt={images[0].alt} index={0} />
                    </div>
                    <div className="md:col-span-3">
                        <TiltCard src={images[1].src} alt={images[1].alt} index={1} />
                    </div>

                    {/* Bottom Row: 3 Images (Supporting) */}
                    <div className="md:col-span-2">
                        <TiltCard src={images[2].src} alt={images[2].alt} index={2} />
                    </div>
                    <div className="md:col-span-2">
                        <TiltCard src={images[3].src} alt={images[3].alt} index={3} />
                    </div>
                    <div className="md:col-span-2">
                        <TiltCard src={images[4].src} alt={images[4].alt} index={4} />
                    </div>
                </div>

                {/* Mobile version simple stack handled by grid-cols-1 */}
            </div>
        </section>
    );
}
