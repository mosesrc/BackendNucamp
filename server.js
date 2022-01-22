const express = require("express");

const hostname = "localhost";
const port = 3000;

const app = express(); //Returns an express server application

app.use((req, res) => {
  console.log(req.header);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

// Creates an instance of the http server class and starts listening to it
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
