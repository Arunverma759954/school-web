import Tesseract from 'tesseract.js';
import fs from 'fs';
import path from 'path';

const publicDir = 'f:/school-web/public';

async function readImage(file) {
    console.log(`Reading ${file}...`);
    try {
        const { data: { text } } = await Tesseract.recognize(
            path.join(publicDir, file),
            'eng'
        );
        console.log(`\n--- TEXT from ${file} ---`);
        console.log(text);
        console.log(`-------------------------\n`);
    } catch (e) {
        console.error(e);
    }
}

async function run() {
    await readImage('tc3.jpeg');
    await readImage('tc5.jpeg');
    const files = fs.readdirSync(publicDir).filter(f => f.startsWith('tc') && f.endsWith('.jpeg'));
    for (const file of files) {
       // just checking if aarushi is actually hidden somewhere
       const { data: { text } } = await Tesseract.recognize(path.join(publicDir, file), 'eng');
       if (text.toLowerCase().includes('aarushi')) {
           console.log(`FOUND AARUSHI IN: ${file}`);
       }
    }
}

run();
