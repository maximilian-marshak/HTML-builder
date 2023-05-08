const path = require('path');
const getTextPath = path.join(__dirname, 'text.txt');

const fs = require('fs');
const getText = fs.createReadStream(getTextPath,'utf-8');
getText.on('data', chunk => console.log(chunk));