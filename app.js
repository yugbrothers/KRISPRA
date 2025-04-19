const express = require('express');
const path = require('path');
const app = express();

// Route imports
const mensRoutes = require('./routes/mens');
const womenRoutes = require('./routes/women');
const productRoutes = require('./routes/products'); // Add this line
const checkoutRoutes = require('./routes/checkout'); // add this line

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mens', mensRoutes);
app.use('/women', womenRoutes);
app.use('/buy', productRoutes); // Use this route for buy links
app.use('/checkout', checkoutRoutes); // add this line
app.use(express.urlencoded({ extended: true })); // to parse form data

app.post('/pay', (req, res) => {
  const { name, price } = req.body;
  res.send(`<h2>Thank you for purchasing <strong>${name}</strong> for <strong>${price}</strong>!</h2>`);
});

// Home route
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './views' });
});
// Signin route
app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signin.html'));
});

// Pay route
app.get('/pay', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pay.html'));
});


// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
