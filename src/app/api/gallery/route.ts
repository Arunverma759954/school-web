import { NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://school-backend-3-8r1j.onrender.com';
const BACKEND_URL = `${BACKEND_API_URL}/api/gallery`;

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET() {
    try {
        const res = await fetch(BACKEND_URL, { cache: 'no-store' });
        const data = await res.json();
        
        // Ensure URLs are absolute if needed
        const processedData = data.map((img: any) => {
            let src = img.src;
            
            // Map /uploads/Gallery/... to /Gallery/... (Local website storage)
            if (src.startsWith('/uploads/Gallery/')) {
                src = src.replace('/uploads/Gallery/', '/Gallery/');
            } 
            // Any other /uploads/ must stay /uploads/ but point to the backend
            else if (src.startsWith('/uploads/')) {
                src = `${BACKEND_API_URL}${src}`;
            }
            // Filename only (Legacy)
            else if (src && !src.startsWith('http') && !src.startsWith('/')) {
                src = `/Gallery/${src}`;
            }

            return {
                ...img,
                src: (src.startsWith('http') || src.startsWith('/Gallery/') || src.startsWith('/'))
                    ? src 
                    : `${BACKEND_API_URL}${src.startsWith('/') ? '' : '/'}${src}`
            };
        });

        return NextResponse.json(processedData, { headers: corsHeaders });
    } catch (error) {
        console.error("Gallery Proxy Error:", error);
        return NextResponse.json({ error: 'Failed to load data from backend' }, { status: 500, headers: corsHeaders });
    }
}
