#!/bin/bash
# Custom build script to avoid Next.js plugin auto-detection

echo "Starting custom build process..."

# Temporarily rename Next.js config to avoid detection
if [ -f "next.config.ts" ]; then
    mv next.config.ts next.config.ts.bak
fi

if [ -f "next.config.js" ]; then
    mv next.config.js next.config.js.bak
fi

# Temporarily modify package.json to hide Next.js
if [ -f "package.json" ]; then
    cp package.json package.json.bak
    # Create a temporary package.json without next in scripts
    node -e "
        const pkg = require('./package.json');
        pkg.scripts = {
            'dev': 'echo \"Dev mode disabled during build\"',
            'build': 'echo \"Building...\" && node build-script.js',
            'start': 'echo \"Start disabled during build\"',
            'lint': 'echo \"Lint disabled during build\"'
        };
        require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));
    "
fi

# Create the actual build script
cat > build-script.js << 'EOF'
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Restoring Next.js configuration...');

// Restore Next.js config
if (fs.existsSync('next.config.ts.bak')) {
    fs.renameSync('next.config.ts.bak', 'next.config.ts');
}
if (fs.existsSync('next.config.js.bak')) {
    fs.renameSync('next.config.js.bak', 'next.config.js');
}

// Restore original package.json
if (fs.existsSync('package.json.bak')) {
    fs.renameSync('package.json.bak', 'package.json');
}

console.log('Running Next.js build...');
try {
    execSync('npm install', { stdio: 'inherit' });
    execSync('npx next build', { stdio: 'inherit' });
    console.log('Build completed successfully!');
} catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
}
EOF

# Run the actual build
node build-script.js

echo "Custom build process completed!"
