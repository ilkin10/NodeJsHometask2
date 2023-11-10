const fs = require('fs');
const path = require('path');

const downloadsFolder = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsFolder)) {
  fs.mkdir(downloadsFolder);
  console.log('Downloads folder created.');
} else {
  console.log('Downloads folder already exists.');
}

const files = ['file1.txt', 'file2.txt', 'file3.txt'];

files.forEach((filename) => {
  const filePath = path.join(__dirname, filename);
  const content = `This is an example text file (${filename}).`;

  fs.writeFileSync(filePath, content);
  console.log(`${filename} created.`);
});

files.forEach((filename) => {
  const sourcePath = path.join(__dirname, filename);
  const destinationPath = path.join(downloadsFolder, filename);

  fs.copyFileSync(sourcePath, destinationPath);
  console.log(`${filename} copied to the downloads folder.`);
});

console.log('Process complete.');
