import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const directoryPath = path.join(process.cwd(), 'src', 'assets', 'images');

async function resizeImages(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    // Recursively call the function for subdirectories
                    resizeImages(filePath);
                } else if (file.match(/\.(jpg|jpeg|png|avif|webp)$/i)) {
                    // Get image width
                    sharp(filePath)
                        .metadata()
                        .then(async metadata => {
                            // Check if image is wider than 1024 pixels
                            if (metadata.width > 1024) {
                                // Resize image to max width of 1024 pixels
                                sharp.cache(false);
                                await resizeFile(filePath)
                                

                            } else {
                                console.log(`Skipped ${filePath} (not wider than 1024 pixels)`);
                            }
                        })
                        .catch(err => {
                            console.error('Error getting image metadata:', err);
                        });
                }
            });
        });
    });
}

async function resizeFile(path) {
    let buffer = await sharp(path)
        .resize({ width: 1024 })
        .toBuffer();
    return sharp(buffer).toFile(path);
}

// Start conversion process
await resizeImages(directoryPath);