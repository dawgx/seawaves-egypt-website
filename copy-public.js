const fs = require('fs');
const path = require('path');

// Copy public folder to build folder
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      // Don't overwrite index.html - it's already built by React
      if (entry.name === 'index.html') {
        console.log('📄 Skipping index.html - keeping React build version');
        continue;
      }
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy public folder to build folder
const publicDir = path.join(__dirname, 'public');
const buildDir = path.join(__dirname, 'build');

console.log('🔍 Copy Public Script Debug:');
console.log('🔍 __dirname:', __dirname);
console.log('🔍 publicDir:', publicDir, 'exists:', fs.existsSync(publicDir));
console.log('🔍 buildDir:', buildDir, 'exists:', fs.existsSync(buildDir));

if (fs.existsSync(publicDir)) {
  console.log('📁 Copying public folder to build...');
  console.log('📁 Source:', publicDir);
  console.log('📁 Destination:', buildDir);
  
  copyDir(publicDir, buildDir);
  
  // Verify the copy worked
  const imagesDir = path.join(buildDir, 'images');
  console.log('📁 Images directory exists:', fs.existsSync(imagesDir));
  if (fs.existsSync(imagesDir)) {
    const imageFiles = fs.readdirSync(imagesDir);
    console.log('📁 Images copied:', imageFiles.length, 'items');
    console.log('📁 Sample images:', imageFiles.slice(0, 3));
  }
  
  console.log('✅ Public folder copied successfully!');
} else {
  console.log('❌ Public folder not found!');
  console.log('❌ Expected path:', publicDir);
}
