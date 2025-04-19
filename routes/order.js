const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // if using Gmail
// OR Firebase setup here if using Firestore

router.post('/submit-order', async (req, res) => {
  const { product, user } = req.body;

  // Option 1: Send to Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'New KRISPRA Order',
    text: `
      Product: ${product.name}
      Price: ${product.price}
      Image: ${product.img}

      Customer:
      Name: ${user.firstName} ${user.lastName}
      Address: ${user.address}
      Phone: ${user.phone}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;
