import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load backend .env
dotenv.config({ path: path.join(__dirname, '..', 'admin', 'backend', '.env') });

const TCSchema = new mongoose.Schema({
    studentName: String,
    imageFile: String
}, { collection: 'tcs' });

const TC = mongoose.model('TC', TCSchema);

async function migrate() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected.");

        const tcs = await TC.find({ imageFile: { $regex: /^\/uploads\/Gallery\/TC\// } });
        console.log(`Found ${tcs.length} records with incorrect paths.`);

        for (const tc of tcs) {
            const oldPath = tc.imageFile;
            const newPath = oldPath.replace('/uploads/Gallery/TC/', '/Gallery/TC/');
            tc.imageFile = newPath;
            await tc.save();
            console.log(`Updated ${tc.studentName}: ${oldPath} -> ${newPath}`);
        }

        console.log("Migration complete.");
    } catch (err) {
        console.error("Migration failed:", err.message);
    } finally {
        await mongoose.disconnect();
    }
}

migrate();
