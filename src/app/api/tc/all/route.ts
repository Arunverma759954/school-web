import { NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://school-admin-dy0c.onrender.com';
const BACKEND_URL = `${BACKEND_API_URL}/api/tc`;

export async function GET() {
    try {
        console.log("TC Proxy: Fetching all from", BACKEND_URL);
        const res = await fetch(BACKEND_URL, { 
            cache: 'no-store',
            headers: { 'Accept': 'application/json' }
        });
        
        if (!res.ok) {
            console.error(`TC Proxy: Backend unreachable or returned error ${res.status}`);
            return NextResponse.json({ error: `Backend returned ${res.status}` }, { status: res.status });
        }

        const data = await res.json();
        
        const processedData = Array.isArray(data) ? data : data;

        return NextResponse.json(processedData);
    } catch (error: any) {
        console.error("TC Proxy Critical Error:", error.message);
        return NextResponse.json({ 
            error: 'Failed to connect to backend',
            details: error.message 
        }, { status: 500 });
    }
}
