import { NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://school-admin-dy0c.onrender.com';
const BACKEND_URL = `${BACKEND_API_URL}/api/events`;

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET() {
    try {
        const res = await fetch(BACKEND_URL, { cache: 'no-store' });
        const data = await res.json();
        return NextResponse.json(data, { headers: corsHeaders });
    } catch (error) {
        console.error("Events Proxy Error:", error);
        return NextResponse.json({ error: 'Failed to load events from backend' }, { status: 500, headers: corsHeaders });
    }
}
