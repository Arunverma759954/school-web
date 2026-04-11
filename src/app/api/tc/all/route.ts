import { NextResponse } from 'next/server';

const BACKEND_URL = 'http://127.0.0.1:5000/api/tc';

export async function GET() {
    try {
        const res = await fetch(BACKEND_URL, { cache: 'no-store' });
        
        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch TCs' }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("TC All Proxy Error:", error);
        return NextResponse.json({ error: 'Failed to connect to backend' }, { status: 500 });
    }
}
