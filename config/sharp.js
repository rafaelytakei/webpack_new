const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const paths = require('./paths');

const filesToConvert = [];
function fromDir(startPath, filter) {
	if (!fs.existsSync(startPath)) {
		console.log('no dir ', startPath);
		return;
	}
	const files = fs.readdirSync(startPath);
	for (let i = 0; i < files.length; i += 1) {
		const filename = path.join(startPath, files[i]);
		const stat = fs.lstatSync(filename);
		if (stat.isDirectory()) {
			fromDir(filename, filter); // recurse
		} else if (filename.indexOf(filter) >= 0) {
			const basename = path.basename(filename, '.png');
			const filePath = path.dirname(filename);
			try {
				if (fs.existsSync(`${filePath}/${basename}.webp`)) {
					// file exists, so don't need to convert
				} else {
					filesToConvert.push(filename);
				}
			} catch (err) {
				console.warn(err);
			}
		}
	}
}

fromDir(`${paths.src}/assets/images`, '.png');

console.log(`Starting PNG to WebP conversion`);
for (const file of filesToConvert) {
	const outputName = path.basename(file, '.png');
	const outputPath = path.dirname(file);
	sharp(file).webp().toFile(`${outputPath}/${outputName}.webp`);
}
console.log('PNG files have been converted to WebP successfully');
