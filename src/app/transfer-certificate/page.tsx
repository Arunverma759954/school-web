"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    FileText,
    Search,
    Download,
    CheckCircle,
    ArrowLeft,
    GraduationCap,
    Shield,
    X,
} from "lucide-react";

interface TCRecord {
    id: number;
    studentName: string;
    admissionNo: string;
    className: string;
    imageFile: string;
    tcNumber?: string;
    issueDate?: string;
}

export default function TransferCertificatePage() {
    const [query, setQuery] = useState("");
    const [allTCs, setAllTCs] = useState<TCRecord[]>([]);
    const [selectedTC, setSelectedTC] = useState<TCRecord | null>(null);

    useEffect(() => {
        const fetchAllTCs = async () => {
            try {
                const res = await fetch("/api/tc/all", { cache: "no-store" });
                if (res.ok) {
                    const data = await res.json();
                    setAllTCs(Array.isArray(data) ? data : []);
                }
            } catch (err) {
                console.error("Failed to load TC list:", err);
            }
        };
        fetchAllTCs();
        const interval = setInterval(fetchAllTCs, 15000);
        return () => clearInterval(interval);
    }, []);

    const filteredTCs = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return [];
        return allTCs.filter(
            (tc) =>
                tc.admissionNo?.toLowerCase().includes(q) ||
                tc.studentName?.toLowerCase().includes(q)
        );
    }, [query, allTCs]);

    const handleDownload = async (imgUrl: string, studentName: string) => {
        try {
            const response = await fetch(imgUrl);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            const ext = imgUrl.split(".").pop()?.split("?")[0] || "jpg";
            link.download = `${studentName.replace(/\s+/g, "_")}_TC.${ext}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        } catch {
            window.open(imgUrl, "_blank");
        }
    };

    const clearSearch = () => {
        setQuery("");
        setSelectedTC(null);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a] relative overflow-x-hidden pt-[100px]">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Page Header */}
                <section className="relative z-10 py-16 text-center px-4">
                    <div className="max-w-5xl mx-auto mb-6 flex items-start">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/50 hover:text-secondary text-xs font-bold uppercase tracking-widest transition-colors group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
                        <FileText size={14} className="text-secondary" />
                        <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Official Document</span>
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

                    {/* Search Input — no button, live results */}
                    <div className="max-w-md mx-auto mt-8 relative">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40 group-focus-within:text-secondary transition-colors pointer-events-none" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => { setQuery(e.target.value); setSelectedTC(null); }}
                                placeholder="Enter Admission Number"
                                className="w-full pl-12 pr-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                                autoComplete="off"
                            />
                            {query && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Live results dropdown */}
                        {query.trim().length > 0 && (
                            <div className="absolute w-full mt-2 bg-[#1a1f2e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-30">
                                {filteredTCs.length === 0 ? (
                                    <div className="px-5 py-4 text-white/40 text-sm text-center">
                                        No record found for &quot;{query}&quot;
                                    </div>
                                ) : (
                                    filteredTCs.map((tc) => (
                                        <button
                                            key={tc.id}
                                            onClick={() => { setSelectedTC(tc); setQuery(tc.admissionNo); }}
                                            className="w-full flex items-center gap-4 px-5 py-3 hover:bg-white/5 transition-colors text-left border-b border-white/5 last:border-0"
                                        >
                                            <div className="h-10 w-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0 flex items-center justify-center">
                                                {tc.imageFile ? (
                                                    <img src={tc.imageFile} alt={tc.studentName} className="w-full h-full object-cover" />
                                                ) : (
                                                    <FileText size={16} className="text-secondary" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white font-bold text-sm truncate">{tc.studentName}</p>
                                                <p className="text-white/40 text-xs uppercase tracking-widest">
                                                    ADM: {tc.admissionNo} · {tc.className}
                                                </p>
                                            </div>
                                            <CheckCircle size={14} className="text-secondary shrink-0" />
                                        </button>
                                    ))
                                )}
                            </div>
                        )}
                    </div>

                    {/* Selected TC result */}
                    {selectedTC && (
                        <div className="max-w-xl mx-auto mt-8 animate-fadeIn">
                            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 mb-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <CheckCircle size={20} className="text-green-400 shrink-0" />
                                    <div className="text-left">
                                        <p className="text-green-300 font-bold text-sm">Record Found</p>
                                        <p className="text-green-400/60 text-xs">
                                            <span className="text-white font-bold">{selectedTC.studentName}</span>
                                            {" · "}{selectedTC.className}
                                            {" · "}ADM: {selectedTC.admissionNo}
                                        </p>
                                    </div>
                                </div>
                                {selectedTC.imageFile && (
                                    <button
                                        onClick={() => handleDownload(selectedTC.imageFile, selectedTC.studentName)}
                                        className="w-full bg-green-500 hover:bg-green-600 text-white font-black uppercase tracking-widest text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
                                    >
                                        <Download size={16} />
                                        Download TC
                                    </button>
                                )}
                            </div>

                            {selectedTC.imageFile && (
                                <div className="bg-white/5 p-4 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-sm">
                                    <img
                                        src={selectedTC.imageFile}
                                        alt="Transfer Certificate"
                                        className="w-full h-auto rounded-2xl shadow-lg"
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Quick Access Directory */}
                    <div className="mt-16 max-w-4xl mx-auto px-4">
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                            <div className="flex items-center gap-2">
                                <Shield size={14} className="text-secondary/50" />
                                <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                                    Quick Access Directory
                                </h3>
                            </div>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {allTCs.map((tc) => (
                                <div
                                    key={tc.id}
                                    onClick={() => { setSelectedTC(tc); setQuery(tc.admissionNo); window.scrollTo({ top: 400, behavior: "smooth" }); }}
                                    className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-secondary/20 hover:border-secondary transition-all duration-500 backdrop-blur-md flex flex-col items-center justify-center text-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(250,204,21,0.15)] hover:-translate-y-1 overflow-hidden cursor-pointer"
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-secondary/10 transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -ml-10 -mb-10 group-hover:bg-primary/10 transition-colors" />

                                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary transition-all duration-500 mb-2 overflow-hidden">
                                        {tc.imageFile ? (
                                            <img
                                                src={tc.imageFile}
                                                className="w-full h-full object-cover"
                                                alt={tc.studentName}
                                            />
                                        ) : (
                                            <FileText size={40} className="text-secondary group-hover:scale-110 transition-transform" />
                                        )}
                                    </div>

                                    <div className="relative z-10">
                                        <span className="block text-lg font-black uppercase tracking-tight leading-tight">
                                            {tc.studentName}
                                        </span>
                                        <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1 font-bold">
                                            {tc.className}
                                        </p>
                                        <p className="text-[9px] text-secondary/60 uppercase tracking-widest mt-0.5 font-bold">
                                            ADM: {tc.admissionNo}
                                        </p>
                                    </div>

                                    {tc.imageFile && (
                                        <div
                                            onClick={(e) => { e.stopPropagation(); handleDownload(tc.imageFile, tc.studentName); }}
                                            className="relative z-20 mt-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-white text-primary font-black transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-[0_4px_15px_rgba(250,204,21,0.4)] cursor-pointer"
                                        >
                                            <Download size={14} className="animate-bounce" />
                                            <span className="text-[10px] uppercase tracking-wider">Download TC</span>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {allTCs.length === 0 && (
                                <div className="col-span-full py-12 text-white/30 text-sm text-center">
                                    No certificates in registry yet.
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Help note */}
                <section className="relative z-10 max-w-2xl mx-auto px-4 pb-20 text-center">
                    <p className="text-white/30 text-xs">
                        Having trouble finding your TC?{" "}
                        <Link href="/enquiry" className="text-secondary hover:underline">
                            Contact the school office
                        </Link>{" "}
                        for assistance.
                    </p>
                </section>
            </main>
            <Footer />

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.4s ease forwards; }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50%       { background-position: 100% 50%; }
                }
                .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
            `}</style>
        </>
    );
}
