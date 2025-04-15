const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, images, JS) from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to render your HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'mens.html'));
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
