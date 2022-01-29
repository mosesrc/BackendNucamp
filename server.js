const express = require("express");
const morgan = require("morgan");
const campsiteRouter = require("./routes/campsiteRouter");
const promotionRouter = require("./routes/promotionRouter");
const partnerRouter = require('./routes/partnerRouter');

const hostname = "localhost";
const port = 3000;

const app = express(); //Returns an express server application
app.use(morgan("dev")); //This configures morgan to log using the developer version which prints more info to screen
app.use(express.json());

app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionRouter);
app.use('/partners', partnerRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

// Creates an instance of the http server class and starts listening to it
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
