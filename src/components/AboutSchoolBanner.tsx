"use client";

import React from "react";

export default function AboutSchoolBanner() {
    return (
        <section
            className="w-full relative bg-cover bg-center bg-no-repeat bg-fixed py-20"
            style={{ backgroundImage: "url('/image1.jpg')" }}
        >
            {/* Dark Overlay Removed */}
            {/* <div className="absolute inset-0 bg-black/70"></div> */}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Title */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-white text-1xl md:text-2xl lg:text-3xl font-bold font-serif uppercase tracking-wide leading-tight">
                            About St. Martin's Diocesan School
                        </h2>
                        <div className="w-24 h-1 bg-[#8B0000] mt-6"></div>
                    </div>

                    {/* Right Side: History Content */}
                    <div className="text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide text-[#8B0000]">
                            History
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed text-gray-200 text-justify">
                            St. Martin's Diocesan School, Delhi Cantt St. Martin's Diocesan School, under the aegis of the Diocese of Delhi, Church of North India, situated in the lush green Delhi Cantonment, was founded way back in 1960 by the British Educationist Missionary, Ms. Helen D. Jenwood.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
