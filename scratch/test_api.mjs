import fetch from 'node-fetch';

async function test() {
    try {
        const res = await fetch('http://localhost:3000/api/tc/all');
        console.log('Status:', res.status);
        const data = await res.json();
        console.log('Data length:', data.length);
        if (data.length > 0) {
            console.log('First record:', data[0]);
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
}

test();
