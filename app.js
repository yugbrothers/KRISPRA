const express = require('express');
const path = require('path');
const app = express();

// Import route files
const mensRoutes = require('./routes/mens');
const womenRoutes = require('./routes/women');

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use the routers
app.use('/mens', mensRoutes);
app.use('/women', womenRoutes);

// Home route
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './views' });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});


