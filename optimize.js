const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dirPath = path.join(__dirname, 'assets');

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.toLowerCase().endsWith('.png')) {
            const inputPath = path.join(dirPath, file);
            // Replace .png with .webp
            const outputFileName = file.substring(0, file.lastIndexOf('.')) + '.webp';
            const outputPath = path.join(dirPath, outputFileName);

            console.log(`Optimizing: ${file}...`);
            try {
                // Correct sharp-cli syntax
                execSync(`sharp -i "${inputPath}" -o "${outputPath}" -f webp -q 75 --effort 6`);
                console.log(`✅ Successfully created: ${outputFileName}`);

                // Get sizes
                const oldSize = fs.statSync(inputPath).size / (1024 * 1024);
                const newSize = fs.statSync(outputPath).size / (1024 * 1024);
                console.log(`   Size reduced from ${oldSize.toFixed(2)} MB to ${newSize.toFixed(2)} MB`);
            } catch (error) {
                console.error(`❌ Failed to process ${file}:`, error.message);
            }
        }
    });
});
