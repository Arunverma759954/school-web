import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src/data/gallery.json');

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
        if (!fs.existsSync(DATA_PATH)) {
            return NextResponse.json([], { headers: corsHeaders });
        }
        const fileData = fs.readFileSync(DATA_PATH, 'utf8');
        const data = JSON.parse(fileData);
        return NextResponse.json(data, { headers: corsHeaders });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load data' }, { status: 500, headers: corsHeaders });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { images } = body;
        
        if (!images || !Array.isArray(images)) {
            return NextResponse.json({ error: 'Invalid data format' }, { status: 400, headers: corsHeaders });
        }

        // Process images to handle Base64 uploads
        const processedImages = images.map((img) => {
            if (img.src && img.src.startsWith('data:image')) {
                // It's a base64 upload, save it to public folder
                const [meta, data] = img.src.split(',');
                const extension = meta.split('/')[1].split(';')[0];
                const fileName = `upload_${Date.now()}_${Math.floor(Math.random() * 1000)}.${extension}`;
                const uploadDir = path.join(process.cwd(), 'public/Gallery/uploads');
                
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                const filePath = path.join(uploadDir, fileName);
                fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
                
                // Return updated image object with public path
                return {
                    ...img,
                    src: `/Gallery/uploads/${fileName}`
                };
            }
            return img;
        });

        fs.writeFileSync(DATA_PATH, JSON.stringify(processedImages, null, 2), 'utf8');
        return NextResponse.json({ message: 'Gallery updated successfully', images: processedImages }, { headers: corsHeaders });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Failed to update data' }, { status: 500, headers: corsHeaders });
    }
}
