import json

with open('gallery_files.json', 'r', encoding='utf-16le') as f:
    files = json.load(f)

static_gallery = []
for file in files:
    path = file['Path']
    parts = path.split('/')
    if len(parts) >= 3:
        category_raw = parts[2]
        # Clean up category name
        category = category_raw.replace('-', ' ').title()
        if category == 'Uploads': category = 'General'
        
        # Determine Alt
        filename = parts[-1]
        alt = filename.split('.')[0].replace('-', ' ').replace('_', ' ').title()
        if len(alt) > 30: alt = alt[:27] + "..."
        
        static_gallery.append({
            "src": path,
            "alt": alt,
            "category": category
        })

print(json.dumps(static_gallery, indent=2))
