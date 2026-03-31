"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    FileText,
    Search,
    Download,
    CheckCircle,
    AlertCircle,
    ArrowLeft,
    GraduationCap,
    BookOpen,
    Shield,
    Clock,
    Loader2,
} from "lucide-react";

// TC Holders lists for both sessions
const TC_HOLDERS_2025_26: { name: string; class: string; tcNo: string }[] = [
    // Admin: Add 2025-26 TC holders here
    // Example: { name: "Student Name", class: "Class X", tcNo: "TC/2025/001" },
];

const TC_HOLDERS_2026_27: { name: string; class: string; tcNo: string }[] = [
    // Admin: Add 2026-27 TC holders here
];

// Professional TC Database Structure
// We use a structured array to map student names to their respective TC images.
// This allows for fuzzy searching (e.g., typing 'yatharth' will find 'Yatharth Rout').
export interface TCRecord {
    id: string;
    studentName: string;
    imageFile: string;
}

const TC_DATABASE: TCRecord[] = [
    { id: "tc", studentName: "Yatharth Rout", imageFile: "tc.jpeg" },
    { id: "tc1", studentName: "Abhinav Kumar Singh", imageFile: "tc1.jpeg" },
    // { id: "tc2",  studentName: "Aarushi Yadav",       imageFile: "tc2.jpeg" },
    { id: "tc3", studentName: "Anant Yadav", imageFile: "tc3.jpeg" },
    { id: "tc4", studentName: "Arpan Toppo", imageFile: "tc4.jpeg" },
    { id: "tc5", studentName: "Aarushi Yadav", imageFile: "tc5.jpeg" },
    { id: "tc6", studentName: "B. Sudheshya Patra", imageFile: "tc6.jpeg" },
    { id: "tc7", studentName: "Bed Prakash Sidar", imageFile: "tc7.jpeg" },
    { id: "tc8", studentName: "Harshit Kumar", imageFile: "tc8.jpeg" },
    { id: "tc9", studentName: "Jayashree Urma", imageFile: "tc9.jpeg" },
    { id: "tc10", studentName: "Nabakishor Sahoo", imageFile: "tc10.jpeg" },
    { id: "tc11", studentName: "Nayan Sahu", imageFile: "tc11.jpeg" },
    { id: "tc12", studentName: "Pranay Kumar Topno", imageFile: "tc12.jpeg" },
    { id: "tc13", studentName: "Raj Rajeswar Singh", imageFile: "tc13.jpeg" },
    { id: "tc14", studentName: "Sahil Ranjan Meher", imageFile: "tc14.jpeg" },
    { id: "tc15", studentName: "Santushti Pandey", imageFile: "tc15.jpeg" },
    { id: "tc16", studentName: "Shreya Raj", imageFile: "tc16.jpeg" },
    { id: "tc17", studentName: "Biswa Binayak Swain", imageFile: "tc17.jpeg" },
    { id: "tc18", studentName: "Yashraj Choudhary", imageFile: "tc18.jpeg" },
    { id: "tc19", studentName: "Yatharth Rout", imageFile: "tc19.jpeg" },
];

// We now use uploaded images directly instead of dummy data.

export default function TransferCertificatePage() {
    const [admissionNo, setAdmissionNo] = useState("");
    const [tcImageStr, setTcImageStr] = useState<string | null>(null);
    const [foundStudentName, setFoundStudentName] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = () => {
        if (!admissionNo.trim()) {
            setError("Please enter a valid Name/Number.");
            setTcImageStr(null);
            return;
        }
        setLoading(true);
        setError("");
        setTcImageStr(null);

        // Check if image exists
        setTimeout(() => {
            const searchInput = admissionNo.trim().toLowerCase();

            // Professional Search Logic: Match by ID or partial Student Name
            const matchedRecord = TC_DATABASE.find(record =>
                record.id === searchInput ||
                record.studentName.toLowerCase().includes(searchInput)
            );

            // Fallback: If no match found in DB, maybe they typed the explicit filename
            const imageFileName = matchedRecord
                ? matchedRecord.imageFile
                : (searchInput.endsWith('.jpeg') || searchInput.endsWith('.jpg') ? searchInput : `${searchInput}.jpeg`);

            const imageUrl = `/${imageFileName}`;

            const img = new Image();
            img.onload = () => {
                setTcImageStr(imageUrl);
                setFoundStudentName(matchedRecord ? matchedRecord.studentName : admissionNo.trim());
                setError("");
                setSearched(true);
                setLoading(false);
            };
            img.onerror = () => {
                setError(
                    "No record found for the given Name. Please check and try again."
                );
                setSearched(true);
                setLoading(false);
            };
            img.src = imageUrl;
        }, 500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a] relative overflow-x-hidden pt-[100px]">
                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Page Header Section */}
                <section className="relative z-10 py-16 text-center px-4">
                    {/* Back Button */}
                    <div className="max-w-5xl mx-auto mb-6 flex items-start">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/50 hover:text-secondary text-xs font-bold uppercase tracking-widest transition-colors group"
                        >
                            <ArrowLeft
                                size={14}
                                className="group-hover:-translate-x-1 transition-transform"
                            />
                            Back to Home
                        </Link>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
                        <FileText size={14} className="text-secondary" />
                        <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                            Official Document
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-white mb-4">
                        Transfer{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary animate-gradient">
                            Certificate
                        </span>
                    </h1>
                    <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        Enter your Admission Number to retrieve and download your official
                        Transfer Certificate from St. Joseph's Convent School.
                    </p>

                    {/* Search Section */}
                    <div className="max-w-md mx-auto relative group mt-8">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-white/40 group-focus-within:text-secondary transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={admissionNo}
                            onChange={(e) => setAdmissionNo(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter Name or No. (e.g. tc, tc1, tc10)"
                            className="block w-full pl-12 pr-32 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                        />
                        <button
                            onClick={handleSearch}
                            disabled={loading}
                            className="absolute right-2 top-2 bottom-2 px-6 bg-secondary hover:bg-secondary/90 text-primary font-black uppercase tracking-widest text-xs rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_4px_20px_rgba(250,204,21,0.3)]"
                        >
                            {loading ? <Loader2 size={16} className="animate-spin" /> : "Search"}
                        </button>
                    </div>
                    {error && <p className="text-red-400 text-sm mt-4 animate-fadeIn">{error}</p>}
                </section>


                {tcImageStr && (
                    <section
                        id="tc-result"
                        className="relative z-10 max-w-3xl mx-auto px-4 mb-20 animate-fadeIn"
                    >
                        {/* Success Banner */}
                        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 mb-6">
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                                <div>
                                    <p className="text-green-300 font-bold text-sm">
                                        Record Found Successfully
                                    </p>
                                    <p className="text-green-400/60 text-xs">
                                        Student Name: <span className="text-white font-bold">{foundStudentName}</span>
                                    </p>
                                </div>
                            </div>
                            <a
                                href={tcImageStr}
                                download={`${foundStudentName?.replace(/\s+/g, '_')}_Transfer_Certificate.jpeg`}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-black uppercase tracking-widest text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
                            >
                                <Download size={16} />
                                Download TC
                            </a>
                        </div>

                        {/* TC Document Image Preview */}
                        <div
                            id="tc-document"
                            className="bg-white/5 p-4 md:p-6 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
                        >
                            <img src={tcImageStr} alt="Transfer Certificate" className="w-full h-auto rounded-2xl shadow-lg" />
                        </div>
                    </section>
                )}

                {/* Help Note */}
                {!tcImageStr && searched === false && (
                    <section className="relative z-10 max-w-2xl mx-auto px-4 pb-20 text-center">
                        <p className="text-white/30 text-xs">
                            Having trouble finding your TC?{" "}
                            <Link href="/enquiry" className="text-secondary hover:underline">
                                Contact the school office
                            </Link>{" "}
                            for assistance.
                        </p>
                    </section>
                )}
                {/* TC Holders Section */}
                <section className="relative z-10 max-w-5xl mx-auto px-4 pb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-4 backdrop-blur-sm">
                            <FileText size={14} className="text-secondary" />
                            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">TC Holders List</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white mb-2">
                            TC <span className="text-secondary">Holders</span>
                        </h2>
                        <p className="text-white/40 text-sm">Students issued Transfer Certificate — Session wise</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* 2025-26 Column */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                            <div className="bg-primary/80 px-6 py-4 flex items-center gap-3">
                                <GraduationCap size={20} className="text-secondary" />
                                <h3 className="text-white font-black uppercase tracking-widest text-sm">Session 2025–26</h3>
                            </div>
                            {TC_HOLDERS_2025_26.length === 0 ? (
                                <div className="px-6 py-10 text-center text-white/30 text-sm italic">
                                    No TC holders recorded for this session.
                                </div>
                            ) : (
                                <div className="divide-y divide-white/5">
                                    <div className="grid grid-cols-12 px-6 py-2 bg-white/5">
                                        <span className="col-span-1 text-white/40 text-[10px] font-black uppercase tracking-widest">#</span>
                                        <span className="col-span-5 text-white/40 text-[10px] font-black uppercase tracking-widest">Name</span>
                                        <span className="col-span-3 text-white/40 text-[10px] font-black uppercase tracking-widest">Class</span>
                                        <span className="col-span-3 text-white/40 text-[10px] font-black uppercase tracking-widest">TC No.</span>
                                    </div>
                                    {TC_HOLDERS_2025_26.map((holder, i) => (
                                        <div key={i} className="grid grid-cols-12 px-6 py-3 hover:bg-white/5 transition-colors">
                                            <span className="col-span-1 text-white/30 text-xs font-bold">{i + 1}</span>
                                            <span className="col-span-5 text-white text-xs font-bold">{holder.name}</span>
                                            <span className="col-span-3 text-white/60 text-xs">{holder.class}</span>
                                            <span className="col-span-3 text-secondary text-xs font-bold">{holder.tcNo}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* 2026-27 Column */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                            <div className="bg-secondary/20 border-b border-secondary/30 px-6 py-4 flex items-center gap-3">
                                <GraduationCap size={20} className="text-secondary" />
                                <h3 className="text-white font-black uppercase tracking-widest text-sm">Session 2026–27</h3>
                            </div>
                            {TC_HOLDERS_2026_27.length === 0 ? (
                                <div className="px-6 py-10 text-center text-white/30 text-sm italic">
                                    No TC holders recorded for this session.
                                </div>
                            ) : (
                                <div className="divide-y divide-white/5">
                                    <div className="grid grid-cols-12 px-6 py-2 bg-white/5">
                                        <span className="col-span-1 text-white/40 text-[10px] font-black uppercase tracking-widest">#</span>
                                        <span className="col-span-5 text-white/40 text-[10px] font-black uppercase tracking-widest">Name</span>
                                        <span className="col-span-3 text-white/40 text-[10px] font-black uppercase tracking-widest">Class</span>
                                        <span className="col-span-3 text-white/40 text-[10px] font-black uppercase tracking-widest">TC No.</span>
                                    </div>
                                    {TC_HOLDERS_2026_27.map((holder, i) => (
                                        <div key={i} className="grid grid-cols-12 px-6 py-3 hover:bg-white/5 transition-colors">
                                            <span className="col-span-1 text-white/30 text-xs font-bold">{i + 1}</span>
                                            <span className="col-span-5 text-white text-xs font-bold">{holder.name}</span>
                                            <span className="col-span-3 text-white/60 text-xs">{holder.class}</span>
                                            <span className="col-span-3 text-secondary text-xs font-bold">{holder.tcNo}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main >
            <Footer />

            <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </>
    );
}
