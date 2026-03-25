import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
                { error: "Email service is not configured." },
                { status: 500 }
            );
        }

        // Create a fresh transporter per request — most reliable approach with Gmail SSL
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Professional HTML email template
        const mailOptions = {
            from: `"St. Joseph's Convent School" <${process.env.GMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email || process.env.GMAIL_USER,
            subject: `📩 New Admission Enquiry — ${studentName} (${classApplying})`,
            html: `
                <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:620px;margin:auto;border:1px solid #e8e8e8;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
                    <!-- Header -->
                    <div style="background:linear-gradient(135deg,#8B0000,#c0392b);color:white;padding:28px 32px;">
                        <table style="width:100%;border-collapse:collapse;">
                            <tr>
                                <td>
                                    <h2 style="margin:0;font-size:22px;font-weight:700;letter-spacing:0.5px;">📩 New Admission Enquiry</h2>
                                    <p style="margin:6px 0 0;font-size:13px;opacity:0.85;">St. Joseph's Convent School, Jharsuguda</p>
                                </td>
                                <td style="text-align:right;">
                                    <span style="background:rgba(255,255,255,0.2);padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;">${classApplying}</span>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <!-- Body -->
                    <div style="padding:28px 32px;background:#fff;">
                        <p style="margin:0 0 20px;font-size:14px;color:#555;">A new admission enquiry has been submitted via the school website. Details are below:</p>
                        <table style="width:100%;border-collapse:collapse;font-size:14px;">
                            <tr style="background:#fdf8f8;">
                                <td style="padding:12px 16px;border-radius:6px 0 0 6px;font-weight:600;color:#8B0000;width:42%;">👨‍👩‍👦 Parent's Name</td>
                                <td style="padding:12px 16px;border-radius:0 6px 6px 0;color:#222;">${parentName}</td>
                            </tr>
                            <tr>
                                <td style="padding:12px 16px;font-weight:600;color:#8B0000;">🎒 Student's Name</td>
                                <td style="padding:12px 16px;color:#222;">${studentName}</td>
                            </tr>
                            <tr style="background:#fdf8f8;">
                                <td style="padding:12px 16px;font-weight:600;color:#8B0000;">📧 Email</td>
                                <td style="padding:12px 16px;color:#222;">${email || "<em style='color:#aaa;'>Not provided</em>"}</td>
                            </tr>
                            <tr>
                                <td style="padding:12px 16px;font-weight:600;color:#8B0000;">📞 Phone</td>
                                <td style="padding:12px 16px;color:#222;">${phone}</td>
                            </tr>
                            <tr style="background:#fdf8f8;">
                                <td style="padding:12px 16px;font-weight:600;color:#8B0000;">🏫 Class Applying For</td>
                                <td style="padding:12px 16px;color:#222;">${classApplying}</td>
                            </tr>
                            <tr>
                                <td style="padding:12px 16px;font-weight:600;color:#8B0000;">💬 Message</td>
                                <td style="padding:12px 16px;color:#222;">${message || "<em style='color:#aaa;'>No message provided</em>"}</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Footer -->
                    <div style="background:#f7f7f7;padding:16px 32px;border-top:1px solid #eee;text-align:center;">
                        <p style="margin:0;font-size:11px;color:#aaa;">This email was automatically generated from the school website enquiry form.<br/>St. Joseph's Convent School · Jharsuguda, Odisha · Pin-768203</p>
                    </div>
                </div>
            `,
        };

        // Await delivery to guarantee the email is sent before responding
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Enquiry submitted successfully! We will contact you soon." });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json(
            { error: "Failed to send enquiry. Please try again later." },
            { status: 500 }
        );
    }
}
