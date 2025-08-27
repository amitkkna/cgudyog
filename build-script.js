const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting custom build process...');

// Function to hide Next.js files temporarily
function hideNextJsFiles() {
    const filesToHide = [
        'next.config.ts',
        'next.config.js', 
        'next-env.d.ts'
    ];
    
    filesToHide.forEach(file => {
        if (fs.existsSync(file)) {
            fs.renameSync(file, `${file}.hidden`);
            console.log(`📝 Temporarily hiding ${file}`);
        }
    });
}

// Function to restore Next.js files
function restoreNextJsFiles() {
    const filesToRestore = [
        'next.config.ts.hidden',
        'next.config.js.hidden',
        'next-env.d.ts.hidden'
    ];
    
    filesToRestore.forEach(hiddenFile => {
        if (fs.existsSync(hiddenFile)) {
            const originalFile = hiddenFile.replace('.hidden', '');
            fs.renameSync(hiddenFile, originalFile);
            console.log(`📝 Restored ${originalFile}`);
        }
    });
}

async function build() {
    try {
        // Hide Next.js files to avoid plugin detection
        hideNextJsFiles();
        
        // Small delay to ensure files are hidden
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Restore files for actual build
        restoreNextJsFiles();
        
        // Ensure we have node_modules
        if (!fs.existsSync('node_modules')) {
            console.log('📦 Installing dependencies...');
            execSync('npm install', { stdio: 'inherit' });
        }
        
        // Run Next.js build
        console.log('🔨 Building Next.js application...');
        execSync('npx next build', { stdio: 'inherit' });
        
        console.log('✅ Build completed successfully!');
        console.log('📁 Static files are ready in the "out" directory');
        
    } catch (error) {
        console.error('❌ Build failed:', error.message);
        // Make sure to restore files even if build fails
        restoreNextJsFiles();
        process.exit(1);
    }
}

build();
