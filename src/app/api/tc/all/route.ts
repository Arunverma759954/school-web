import { NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://school-backend-3-8r1j.onrender.com';
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
        
        // Map paths for student images
        const processedData = Array.isArray(data) ? data.map((tc: any) => {
            let src = tc.imageFile || '';
            
            if (src.startsWith('/uploads/Gallery/')) {
                src = src.replace('/uploads/Gallery/', '/Gallery/');
            } else if (src.startsWith('/uploads/')) {
                src = `${BACKEND_API_URL}${src}`;
            } else if (src && !src.startsWith('http') && !src.startsWith('/')) {
                // Legacy filenames in Gallery/TC/
                src = `/Gallery/TC/${src}`;
            }

            return {
                ...tc,
                imageFile: src
            };
        }) : data;

        return NextResponse.json(processedData);
    } catch (error: any) {
        console.error("TC Proxy Critical Error:", error.message);
        return NextResponse.json({ 
            error: 'Failed to connect to backend',
            details: error.message 
        }, { status: 500 });
    }
}
