"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop", // School Building/Campus
        title: "Light Begets Light",
        subtitle: "Nurturing Excellence Since 1960",
        cta: "Learn More",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", // Library/Studying
        title: "Admissions Open 2026-27",
        subtitle: "Join the Legacy of St. Martin's Diocesan School",
        cta: "Apply Now",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop", // Classroom/Students
        title: "Academic Excellence",
        subtitle: "Empowering Future Leaders with Strong Moral Values",
        cta: "Our Curriculum",
    },
];

export default function HeroSlider() {
    return (
        <section className="relative w-full h-[85vh] overflow-hidden bg-black group">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1500}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                navigation
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-bullet">0${index + 1}</span>`;
                    },
                }}
                loop
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full overflow-hidden">
                            {/* Image with Slow Zoom (Ken Burns) - Kept as it is "sidha"/straight but dynamic */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear scale-100 group-[.swiper-slide-active]:scale-110"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/80" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center text-white pb-20">
                                <div className="max-w-5xl flex flex-col items-center">
                                    {/* Subtitle */}
                                    <span
                                        className="inline-block text-[#FFC107] font-black tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] bg-black/40 px-5 py-2 rounded-full border border-[#FFC107]/50 backdrop-blur-md mb-5 transform translate-y-8 opacity-0 transition-all duration-700 delay-300 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100"
                                    >
                                        {slide.subtitle}
                                    </span>

                                    {/* Title */}
                                    <h1
                                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-5 leading-[0.9] text-white drop-shadow-2xl transform scale-95 opacity-0 transition-all duration-1000 delay-500 group-[.swiper-slide-active]:scale-100 group-[.swiper-slide-active]:opacity-100"
                                    >
                                        {slide.title}
                                    </h1>

                                    {/* Description */}
                                    <p
                                        className="text-base md:text-lg text-gray-200 mb-7 max-w-xl font-medium leading-relaxed drop-shadow-md transform translate-y-8 opacity-0 transition-all duration-700 delay-700 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100"
                                    >
                                        Empowering future leaders with strong moral values and academic excellence.
                                    </p>

                                    {/* CTA Button */}
                                    <button
                                        className="bg-[#FFC107] text-[#800000] px-8 py-3.5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-[0_0_50px_rgba(255,193,7,0.5)] text-sm hover:scale-110 active:scale-95 transform translate-y-8 opacity-0 transition-all duration-700 delay-900 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100"
                                    >
                                        {slide.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                /* Navigation Arrows - Minimalist & Non-obstructive */
                .swiper-button-next, .swiper-button-prev {
                    color: white !important;
                    background: transparent !important;
                    width: 50px;
                    height: 50px;
                    transition: all 0.3s ease;
                    z-index: 40 !important; /* Below the side tabs (z-50) */
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .swiper-button-prev {
                    left: 80px !important; /* Moved inward to clear side tabs */
                }
                .swiper-button-next {
                    right: 80px !important; /* Moved inward to clear side tabs */
                }
                
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 28px !important;
                    font-weight: 300 !important;
                    text-shadow: 0 0 10px rgba(0,0,0,0.5);
                }
                
                .swiper-button-next:hover, .swiper-button-prev:hover {
                    color: #FFC107 !important;
                    transform: translateY(-50%) scale(1.2);
                }

                /* Mobile Adjustment */
                @media (max-width: 768px) {
                    .swiper-button-next, .swiper-button-prev {
                        width: 50px;
                        height: 50px;
                        border-width: 2px;
                    }
                    .swiper-button-next:after, .swiper-button-prev:after {
                        font-size: 18px !important;
                    }
                    .swiper-button-prev { left: 15px !important; }
                    .swiper-button-next { right: 15px !important; }
                }

                /* Bullet Styles */
                .swiper-pagination-bullet {
                    width: auto !important;
                    height: auto !important;
                    background: transparent !important;
                    border: none !important;
                    opacity: 1 !important;
                    margin: 0 15px !important;
                    border-radius: 0 !important;
                }

                .custom-bullet {
                    display: inline-block;
                    color: rgba(255,255,255,0.4);
                    font-size: 16px;
                    font-weight: 800;
                    font-family: serif;
                    cursor: pointer;
                    transition: all 0.3s;
                    position: relative;
                }
                .swiper-pagination-bullet-active .custom-bullet {
                    color: #FFC107;
                    font-size: 24px;
                    text-shadow: 0 0 20px rgba(255,193,7,0.5);
                }
            `}</style>
        </section>
    );
}
