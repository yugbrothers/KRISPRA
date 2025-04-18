const express = require('express');
const router = express.Router();

// Dummy product data
const products = {
  '001': { name: 'Black Jacket', price: 1499 },
  '002': { name: 'Black Hoodie', price: 1799 },
  '003': { name: 'Jacket', price: 2499 },
  '004': { name: 'Black Leather Jacket', price: 3199 },
};

// Route for handling product purchase
router.get('/:id', (req, res) => {
  const product = products[req.params.id];

  if (!product) {
    return res.status(404).send('<h1>Product Not Found</h1>');
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Buy Now - ${product.name}</title>
      <link rel="stylesheet" href="/css/style.css" />
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          padding: 2rem;
          background-color: #f9f9f9;
        }
        .buy-page {
          max-width: 500px;
          margin: auto;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          text-align: center;
        }
        .buy-page h1 {
          margin-bottom: 1rem;
        }
        .buy-page p {
          font-size: 1.2rem;
        }
        .buy-page button {
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          background-color: black;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 1.5rem;
        }
      </style>
    </head>
    <body>
      <div class="buy-page">
        <h1>${product.name}</h1>
        <p>Price: ₹${product.price}</p>
        <button onclick="alert('Redirecting to payment...')">Proceed to Pay</button>
      </div>
    </body>
    </html>
  `);
});

module.exports = router;
