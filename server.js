const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

const keyPath = process.env.SSL_KEY_PATH;
const certPath = process.env.SSL_CERT_PATH;

console.log("keyPath: " + keyPath);
// Options to read your SSL certificate and key files
const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
};

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// All other routes should serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Create an HTTPS server
https.createServer(options, app).listen(443, () => {
    console.log('Server is running on port 443');
});
