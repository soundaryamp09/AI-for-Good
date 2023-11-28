const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve website.html when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website.html'));
});

// Listen only on the specified IP address
app.listen(port, '172.25.224.1', () => {
  console.log(`Server is running on http://172.25.224.1:${port}`);
});
