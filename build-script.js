const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting custom build process...');

function sh(cmd) { execSync(cmd, { stdio: 'inherit' }); }

(async () => {
  try {
    // Optional: skip dependency install here—Netlify installs root deps automatically.
    // But keep a fallback for local runs:
    if (!fs.existsSync('node_modules')) {
      console.log('📦 Installing dependencies (local fallback)...');
      sh('npm ci || npm install');
    }

    // Build
    console.log('� next build');
    sh('npx --yes next build');

    // If `out/` wasn't produced by `output: "export"`, try `next export`
    if (!fs.existsSync('out')) {
      console.log('� next export (static export)');
      sh('npx --yes next export');
    }

    if (!fs.existsSync('out')) {
      throw new Error('Publish dir "out" not found. Either enable output:"export" in next.config or keep the Next.js plugin.');
    }

    console.log('✅ Build completed. Static files in ./out');
  } catch (e) {
    console.error('❌ Build failed:', e.message);
    process.exit(1);
  }
})();
