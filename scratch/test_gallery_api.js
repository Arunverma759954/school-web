async function test() {
    try {
        const res = await fetch('http://localhost:3000/api/gallery');
        if (res.ok) {
            const data = await res.json();
            const brokenOnes = data.filter(img => img.alt.includes('PTA') || img.alt.includes('Sports') || img.alt.includes('Annual'));
            console.log(JSON.stringify(brokenOnes, null, 2));
        } else {
            console.error('API failed', res.status);
        }
    } catch (e) {
        console.error('Error', e.message);
    }
}
test();
