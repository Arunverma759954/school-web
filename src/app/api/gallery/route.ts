import { NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://school-backend-4-gbr5.onrender.com';
const BACKEND_URL = `${BACKEND_API_URL}/api/gallery`;

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

const R2_PUBLIC_URL = 'https://pub-e86eefb0b2df4d86911b0ed963814ec3.r2.dev';

export async function GET() {
    try {
        const res = await fetch(BACKEND_URL, { cache: 'no-store' });
        const data = await res.json();

        const r2Images = data.filter((img: any) => img.src?.startsWith(R2_PUBLIC_URL));

        return NextResponse.json(r2Images, { headers: corsHeaders });
    } catch (error) {
        console.error("Gallery Proxy Error:", error);
        return NextResponse.json({ error: 'Failed to load data from backend' }, { status: 500, headers: corsHeaders });
    }
}
