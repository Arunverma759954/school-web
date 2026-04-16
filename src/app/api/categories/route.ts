import { NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://school-backend-4-gbr5.onrender.com';

export async function GET() {
    try {
        const res = await fetch(`${BACKEND_API_URL}/api/categories`, { cache: 'no-store' });
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Categories Proxy Error:", error);
        return NextResponse.json([], { status: 500 });
    }
}
