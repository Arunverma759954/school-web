import { NextResponse } from "next/server";

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://school-admin-dy0c.onrender.com';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { parentName, studentName, phone, classApplying } = body;

        if (!parentName || !studentName || !phone || !classApplying) {
            return NextResponse.json(
                { error: "Please fill all required fields." },
                { status: 400 }
            );
        }

        await fetch(`${BACKEND_API_URL}/api/enquiries`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        return NextResponse.json({ success: true, message: "Enquiry submitted successfully! We will contact you soon." });
    } catch (error) {
        console.error("Enquiry error:", error);
        return NextResponse.json(
            { error: "Failed to submit enquiry. Please try again later." },
            { status: 500 }
        );
    }
}
