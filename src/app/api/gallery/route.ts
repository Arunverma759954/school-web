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

export async function GET() {
    try {
        const res = await fetch(BACKEND_URL, { cache: 'no-store' });
        const data = await res.json();
        
        // Ensure URLs are absolute - all /uploads/ paths point to backend server
        const processedData = data.map((img: any) => {
            let src = img.src;
            
            // All /uploads/ paths must point to the backend server
            if (src && src.startsWith('/uploads/')) {
                src = `${BACKEND_API_URL}${src}`;
            } 
            // Filename only (Legacy flat files in public/Gallery/)
            else if (src && !src.startsWith('http') && !src.startsWith('/')) {
                src = `/Gallery/${src}`;
            }

            return {
                ...img,
                src
            };
        });

        return NextResponse.json(processedData, { headers: corsHeaders });
    } catch (error) {
        console.error("Gallery Proxy Error:", error);
        return NextResponse.json({ error: 'Failed to load data from backend' }, { status: 500, headers: corsHeaders });
    }
}
