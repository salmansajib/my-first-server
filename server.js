const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (path === "/") {
    res.write("<h1>Welcome to the homepage</h1>");
  } else if (path === "/about") {
    res.write("<h1>Welcome to the about page</h1>");
  } else {
    res.write("<h1>404 Page not found</h1>");
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
