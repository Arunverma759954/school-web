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
            // Map /uploads/filename.ext to /filename.ext (Local website root storage for legacy files like pta1.webp, Sports-Day.jpg)
            else if (src.startsWith('/uploads/')) {
                // Check if it's a legacy style path (just filename in /uploads/)
                // New uploads usually have a timestamped name like gallery_171299...
                // But safer to just check if it's one of the known root files
                const fileName = src.replace('/uploads/', '');
                
                // If it's not a newly uploaded file (starts with 'gallery_' or 'image_'), 
                // it's likely a legacy file that should be in the website root
                if (!fileName.startsWith('gallery_') && !fileName.startsWith('image_')) {
                    src = `/${fileName}`;
                } else {
                    src = `${BACKEND_API_URL}${src}`;
                }
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
