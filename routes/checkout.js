router.get('/', (req, res) => {
    console.log("✅ /checkout route hit");
    res.sendFile('checkout.html', { root: './views' });
  });
  