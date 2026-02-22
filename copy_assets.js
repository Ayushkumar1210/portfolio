const fs = require('fs');
const path = require('path');

const srcDir = '/Users/ayushkumar/.gemini/antigravity/brain/8b0374fd-b57a-4560-8de6-37912853c513';
const destDir = '/Users/ayushkumar/Desktop/portfolio/client/public';

const files = [
    { src: 'hero_bg_1770890121375.png', dest: 'hero_bg.png' }
];

files.forEach(file => {
    const srcPath = path.join(srcDir, file.src);
    const destPath = path.join(destDir, file.dest);
    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file.src} to ${file.dest}`);
        } else {
            console.log(`Source file not found: ${srcPath}`);
        }
    } catch (err) {
        console.error(`Error copying ${file.src}:`, err);
    }
});
