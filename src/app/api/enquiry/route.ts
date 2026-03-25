import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create transporter using 'gmail' service preset for better compatibility
const transporter = nodemailer.createTransport({
    service: "gmail",
    pool: true, // Use connection pooling for speed
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false, // Handle certificate issues in local dev
    },
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { parentName, studentName, email, phone, classApplying, message } = body;

        // Validate required fields
        if (!parentName || !studentName || !phone || !classApplying) {
            return NextResponse.json(
                { error: "Please fill all required fields." },
                { status: 400 }
            );
        }

        // Ensure required environment variables exist
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.RECIPIENT_EMAIL) {
            return NextResponse.json(
                {
                    error:
                        "Email service is not configured. Please set GMAIL_USER, GMAIL_APP_PASSWORD, and RECIPIENT_EMAIL in environment variables.",
                },
                { status: 500 }
            );
        }

        // Email content
        const mailOptions = {
            from: `"School Website Enquiry" <${process.env.GMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Admission Enquiry – ${studentName} (${classApplying})`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <div style="background: #8B0000; color: white; padding: 20px 24px;">
                        <h2 style="margin: 0; font-size: 20px;">📩 New Admission Enquiry</h2>
                        <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.8;">St. Joseph's Convent School, Jharsuguda</p>
                    </div>
                    <div style="padding: 24px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 40%;">Parent's Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${parentName}</td></tr>
                            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Student's Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${studentName}</td></tr>
                            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${email || "Not provided"}</td></tr>
                            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${phone}</td></tr>
                            <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Class Applying For</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${classApplying}</td></tr>
                            <tr><td style="padding: 10px 0; font-weight: bold; color: #555;">Message</td><td style="padding: 10px 0; color: #222;">${message || "No message"}</td></tr>
                        </table>
                    </div>
                </div>
            `,
        };

        // Send the email. We await it to ensure Next.js doesn't cut off the request before sending.
        // With 'pool: true' above, this should be fast (around 1-3 seconds).
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Enquiry submitted successfully!" });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json(
            { error: "Failed to send enquiry. Please try again later." },
            { status: 500 }
        );
    }
}
