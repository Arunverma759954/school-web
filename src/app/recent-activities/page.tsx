"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudentLife from "@/components/StudentLife";
import RecentActivities from "@/components/RecentActivities";
import { motion } from "framer-motion";

export default function RecentActivitiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-16 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <p className="text-xs md:text-sm font-black tracking-[0.35em] text-secondary uppercase mb-3">
                            Life at St. Joseph&apos;s
                        </p>
                        <h1 className="text-3xl md:text-5xl font-serif font-black text-primary mb-3 uppercase tracking-[0.15em]">
                            Activities & Student Life
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                            Explore our co-curricular, sports, eco-club and cultural programmes that shape confident,
                            value-driven Josephites.
                        </p>
                    </motion.div>
                </div>
            </section>

            <StudentLife />
            <RecentActivities />

            <Footer />
        </main>
    );
}

