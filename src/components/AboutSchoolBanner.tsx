"use client";

import React from "react";

export default function AboutSchoolBanner() {
    return (
        <section
            className="w-full relative bg-cover bg-center bg-no-repeat bg-fixed py-20"
            style={{ backgroundImage: "url('/image1.jpg')" }}
        >
            {/* Subtle Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center py-10 md:py-20">

                    {/* Left Side: Title with Red Underline */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black font-sans uppercase tracking-tight leading-none">
                            About St. Joseph's <br className="hidden md:block" /> Convent School, <br className="hidden md:block" /> Jharsuguda
                        </h2>
                        <div className="w-24 md:w-32 h-1.5 bg-[#B22222] mt-8 shadow-lg"></div>
                    </div>

                    {/* Right Side: History Section in Red */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl md:text-2xl font-black mb-6 uppercase tracking-widest text-[#FF4500]">
                            History
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed text-white font-medium max-w-xl">
                            St. Joseph's Convent School, Jharsuguda, established with a vision for excellence, has been a pillar of quality education and character building for generations. We are committed to nurturing young minds to become future leaders of tomorrow.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
