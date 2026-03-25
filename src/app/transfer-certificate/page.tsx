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
    // Example: { name: "Student Name", class: "Class IX", tcNo: "TC/2026/001" },
];

// Dummy TC data for demonstration
const TC_DATABASE: Record<string, {
    name: string;
    fatherName: string;
    motherName: string;
    dob: string;
    class: string;
    section: string;
    rollNo: string;
    admissionDate: string;
    leavingDate: string;
    reason: string;
    conduct: string;
    tcNo: string;
}> = {
    "10001": {
        name: "Anjali Sharma",
        fatherName: "Ramesh Sharma",
        motherName: "Sunita Sharma",
        dob: "15 March 2010",
        class: "Class X",
        section: "A",
        rollNo: "2024-10-A-01",
        admissionDate: "01 April 2018",
        leavingDate: "31 March 2024",
        reason: "Parent's Transfer",
        conduct: "Excellent",
        tcNo: "TC/2024/001",
    },
    "10002": {
        name: "Priya Singh",
        fatherName: "Vikram Singh",
        motherName: "Kavita Singh",
        dob: "22 July 2011",
        class: "Class IX",
        section: "B",
        rollNo: "2024-09-B-02",
        admissionDate: "01 April 2019",
        leavingDate: "31 March 2024",
        reason: "Seeking Admission Elsewhere",
        conduct: "Good",
        tcNo: "TC/2024/002",
    },
};

type TCData = (typeof TC_DATABASE)[string];

export default function TransferCertificatePage() {
    const [admissionNo, setAdmissionNo] = useState("");
    const [tcData, setTcData] = useState<TCData | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const [downloading, setDownloading] = useState(false);

    const handleSearch = () => {
        if (!admissionNo.trim()) {
            setError("Please enter a valid Admission Number.");
            setTcData(null);
            return;
        }
        setLoading(true);
        setError("");
        setTcData(null);

        // Simulate async fetch
        setTimeout(() => {
            const result = TC_DATABASE[admissionNo.trim()];
            if (result) {
                setTcData(result);
                setError("");
            } else {
                setError(
                    "No record found for the given Admission Number. Please check and try again."
                );
            }
            setSearched(true);
            setLoading(false);
        }, 1000);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSearch();
    };

    const handleDownload = async () => {
        if (!tcData) return;
        setDownloading(true);
        try {
            const html2canvas = (await import("html2canvas")).default;
            const { jsPDF } = await import("jspdf");
            const element = document.getElementById("tc-document");
            if (!element) return;
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
            });
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`TC_${tcData.tcNo.replace(/\//g, "-")}.pdf`);
        } catch (err) {
            console.error("PDF generation failed:", err);
            // Fallback to print
            window.print();
        } finally {
            setDownloading(false);
        }
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
                </section>

                {/* Info Cards Row */}
                <section className="relative z-10 max-w-5xl mx-auto px-4 mb-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            {
                                icon: Shield,
                                label: "Verified",
                                sub: "Digitally Verified Document",
                            },
                            {
                                icon: Clock,
                                label: "Instant",
                                sub: "Get your TC immediately",
                            },
                            {
                                icon: BookOpen,
                                label: "Official",
                                sub: "School Authorised TC",
                            },
                            {
                                icon: GraduationCap,
                                label: "Secure",
                                sub: "Safe & Encrypted Data",
                            },
                        ].map(({ icon: Icon, label, sub }) => (
                            <div
                                key={label}
                                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-secondary/40 hover:bg-white/8 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary/20 transition-all">
                                    <Icon size={18} className="text-secondary" />
                                </div>
                                <p className="text-white text-sm font-black tracking-widest uppercase">
                                    {label}
                                </p>
                                <p className="text-white/40 text-[10px] mt-0.5">{sub}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Search Card */}
                <section className="relative z-10 max-w-2xl mx-auto px-4 mb-16">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                        <h2 className="text-white font-black uppercase tracking-widest text-sm mb-1">
                            Enter Admission Number
                        </h2>
                        <p className="text-white/40 text-xs mb-6">
                            Try: <span className="text-secondary font-bold">10001</span> or{" "}
                            <span className="text-secondary font-bold">10002</span> for demo
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <Search
                                    size={16}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
                                />
                                <input
                                    id="admissionNoInput"
                                    type="text"
                                    value={admissionNo}
                                    onChange={(e) => {
                                        setAdmissionNo(e.target.value);
                                        setError("");
                                    }}
                                    onKeyDown={handleKeyDown}
                                    placeholder="e.g. 10001"
                                    className="w-full bg-white/8 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-white/25 text-sm font-medium focus:outline-none focus:border-secondary/60 focus:bg-white/10 transition-all"
                                />
                            </div>
                            <button
                                id="searchTCBtn"
                                onClick={handleSearch}
                                disabled={loading}
                                className="bg-primary hover:bg-secondary text-white font-black uppercase tracking-widest text-xs px-8 py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 justify-center shadow-[0_8px_30px_rgba(196,9,2,0.3)] hover:shadow-[0_8px_30px_rgba(196,9,2,0.5)] hover:-translate-y-0.5 active:translate-y-0"
                            >
                                {loading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Searching...
                                    </>
                                ) : (
                                    <>
                                        <Search size={14} />
                                        Search TC
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Error State */}
                        {error && (
                            <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3 animate-fadeIn">
                                <AlertCircle
                                    size={18}
                                    className="text-red-400 flex-shrink-0 mt-0.5"
                                />
                                <p className="text-red-300 text-sm">{error}</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* TC Result Card */}
                {tcData && (
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
                                        TC No: {tcData.tcNo}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleDownload}
                                id="downloadTCBtn"
                                disabled={downloading}
                                className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
                            >
                                {downloading ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Generating PDF...
                                    </>
                                ) : (
                                    <>
                                        <Download size={16} />
                                        Download TC as PDF
                                    </>
                                )}
                            </button>
                        </div>

                        {/* TC Document */}
                        <div
                            id="tc-document"
                            className="bg-white text-gray-800 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.7)] print:shadow-none"
                        >
                            {/* TC Header */}
                            <div className="bg-gradient-to-r from-primary to-[#8B0000] p-8 text-white text-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-40 h-40 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                                    <div className="absolute bottom-0 right-0 w-60 h-60 border-4 border-white rounded-full translate-x-1/2 translate-y-1/2" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg overflow-hidden">
                                        <img
                                            src="/School-Logo-1.jpg"
                                            alt="School Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider mb-1">
                                        St. Joseph's Convent School
                                    </h2>
                                    <p className="text-white/80 text-xs tracking-widest uppercase">
                                        Opp. B.T.M., Jharsuguda, Odisha – 768203
                                    </p>
                                    <div className="mt-4 inline-block border-2 border-white/40 rounded-full px-6 py-1">
                                        <p className="text-sm font-black uppercase tracking-[0.3em]">
                                            Transfer Certificate
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* TC Body */}
                            <div className="p-6 md:p-8">
                                {/* TC Number and Date Row */}
                                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                                    <div>
                                        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                                            TC Number
                                        </p>
                                        <p className="text-gray-800 font-black text-sm">
                                            {tcData.tcNo}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                                            Date of Issue
                                        </p>
                                        <p className="text-gray-800 font-black text-sm">
                                            {new Date().toLocaleDateString("en-IN", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/* Certified Text */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic text-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    This is to certify that{" "}
                                    <strong className="text-gray-800 not-italic">
                                        {tcData.name}
                                    </strong>
                                    , son/daughter of{" "}
                                    <strong className="text-gray-800 not-italic">
                                        {tcData.fatherName}
                                    </strong>{" "}
                                    and{" "}
                                    <strong className="text-gray-800 not-italic">
                                        {tcData.motherName}
                                    </strong>
                                    , was a bonafide student of this school.
                                </p>

                                {/* Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    {[
                                        { label: "Full Name", value: tcData.name },
                                        { label: "Date of Birth", value: tcData.dob },
                                        { label: "Father's Name", value: tcData.fatherName },
                                        { label: "Mother's Name", value: tcData.motherName },
                                        { label: "Class Last Studied", value: `${tcData.class} – Section ${tcData.section}` },
                                        { label: "Roll Number", value: tcData.rollNo },
                                        { label: "Date of Admission", value: tcData.admissionDate },
                                        { label: "Date of Leaving", value: tcData.leavingDate },
                                        { label: "Reason for Leaving", value: tcData.reason },
                                        { label: "Character & Conduct", value: tcData.conduct },
                                    ].map(({ label, value }) => (
                                        <div
                                            key={label}
                                            className="bg-gray-50 border border-gray-100 rounded-xl p-3"
                                        >
                                            <p className="text-gray-400 text-[9px] uppercase tracking-widest font-bold mb-1">
                                                {label}
                                            </p>
                                            <p className="text-gray-800 font-bold text-sm">{value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Signature Section */}
                                <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-end gap-6">
                                    <div className="text-center">
                                        <div className="w-28 h-0.5 bg-gray-300 mx-auto mb-2" />
                                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                                            Class Teacher
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-28 h-0.5 bg-gray-300 mx-auto mb-2" />
                                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                                            Exam Controller
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-28 h-0.5 bg-gray-300 mx-auto mb-2" />
                                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                                            Principal
                                        </p>
                                    </div>
                                </div>

                                {/* Official Stamp Area */}
                                <div className="mt-6 flex justify-center">
                                    <div className="w-24 h-24 border-4 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-300 text-[10px] text-center font-bold uppercase tracking-widest leading-tight">
                                        Official Seal
                                    </div>
                                </div>

                                {/* Footer Note */}
                                <p className="text-gray-400 text-[10px] text-center mt-6 italic">
                                    This certificate is computer generated and is valid without physical signature.
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Help Note */}
                {!tcData && searched === false && (
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
            </main>
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
