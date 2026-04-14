import fetch from 'node-fetch';

async function test() {
    try {
        const res = await fetch('http://localhost:5000/api/tc');
        const data = await res.json();
        console.log("Total TCs:", data.length);
        console.log("First 3 records:");
        data.slice(0, 3).forEach(tc => {
            console.log(`- ${tc.studentName}: ${tc.imageFile}`);
        });
    } catch (err) {
        console.error("Error:", err.message);
    }
}

test();
