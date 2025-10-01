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
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy public folder to build folder
const publicDir = path.join(__dirname, 'public');
const buildDir = path.join(__dirname, 'build');

if (fs.existsSync(publicDir)) {
  console.log('📁 Copying public folder to build...');
  copyDir(publicDir, buildDir);
  console.log('✅ Public folder copied successfully!');
} else {
  console.log('❌ Public folder not found!');
}
