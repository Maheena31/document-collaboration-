const fs = require('fs');
const path = require('path');

console.log('🔧 MongoDB Connection Fix');
console.log('========================\n');

console.log('The application is running but needs MongoDB to work properly.');
console.log('\n📋 Choose one of these options:\n');

console.log('OPTION 1: Use MongoDB Atlas (Cloud - Recommended)');
console.log('1. Go to https://www.mongodb.com/atlas');
console.log('2. Create a free account');
console.log('3. Create a new cluster (free tier)');
console.log('4. Get your connection string');
console.log('5. Replace the MONGODB_URI in server/.env\n');

console.log('OPTION 2: Install Local MongoDB');
console.log('1. Download MongoDB from https://www.mongodb.com/try/download/community');
console.log('2. Install and start MongoDB service');
console.log('3. Keep the current MONGODB_URI in server/.env\n');

console.log('OPTION 3: Use MongoDB Docker (if you have Docker)');
console.log('1. Run: docker run -d -p 27017:27017 --name mongodb mongo:latest');
console.log('2. Keep the current MONGODB_URI in server/.env\n');

console.log('🚀 After setting up MongoDB:');
console.log('1. Restart the application: npm run dev');
console.log('2. Open http://localhost:3000');
console.log('3. Register a new account\n');

console.log('✅ The frontend is working at http://localhost:3000');
console.log('❌ The backend needs MongoDB to handle user registration and documents');
