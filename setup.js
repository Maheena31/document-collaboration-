

const fs = require('fs');
const path = require('path');

// Create .env file for server
const envContent = `PORT=5000
MONGODB_URI=mongodb://localhost:27017/collaborative-editor
JWT_SECRET=collaborative-editor-super-secret-jwt-key-2024
NODE_ENV=development`;

const envPath = path.join(__dirname, 'server', '.env');

try {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created server/.env file');
} catch (error) {
  console.error('❌ Error creating .env file:', error.message);
}

console.log(`
🚀 DocCollab Setup Complete!

Next steps:
1. Make sure MongoDB is running on your system
2. Run: npm run install-all
3. Run: npm run dev
4. Open http://localhost:3000 in your browser

Happy collaborating! 🎉
`);
