const express = require('express');
const router = express.Router();

// Sample product data — you can later pull from a DB
const products = {
  "001": {
    name: "Black Jacket",
    price: "₹1,499",
    image: "/images/bro1.png"
  },
  "002": {
    name: "Black Hoodie",
    price: "₹1,799",
    image: "/images/boss3.png"
  }
};

router.get('/:id', (req, res) => {
  const product = products[req.params.id];
  if (product) {
    res.send(`
      <html>
      <head><title>Checkout - ${product.name}</title></head>
      <body>
        <h1>Checkout</h1>
        <img src="${product.image}" width="200"/>
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <form action="/pay" method="POST">
          <input type="hidden" name="product" value="${product.name}" />
          <input type="hidden" name="price" value="${product.price}" />
          <button type="submit">Proceed to Pay</button>
        </form>
      </body>
      </html>
    `);
  } else {
    res.status(404).send("Product not found");
  }
});

module.exports = router;
