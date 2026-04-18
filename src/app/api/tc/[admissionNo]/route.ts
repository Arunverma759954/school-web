import { NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://school-admin-dy0c.onrender.com';
const BACKEND_URL = `${BACKEND_API_URL}/api/tc`;

export async function GET(
    request: Request,
    { params }: { params: Promise<{ admissionNo: string }> }
) {
    try {
        const { admissionNo } = await params;
        const res = await fetch(`${BACKEND_URL}/${admissionNo}`, { cache: 'no-store' });
        
        if (!res.ok) {
            return NextResponse.json({ message: 'Certificate not found' }, { status: 404 });
        }

        const data = await res.json();
        

        return NextResponse.json(data);
    } catch (error) {
        console.error("TC Proxy Error:", error);
        return NextResponse.json({ error: 'Failed to search TC from backend' }, { status: 500 });
    }
}
