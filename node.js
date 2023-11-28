const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Handling different routes
  if (req.url === '/') {
    // Respond to the root route
    res.statusCode = 200;
    res.end('Hello, World!');
  } else if (req.url === '/about') {
    // Respond to the /about route
    res.statusCode = 200;
    res.end('This is the About page.');
  } else {
    // Handle 404 Not Found
    res.statusCode = 404;
    res.end('404 - Not Found');
  }
});

// Listen on a specific port
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});