const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//Settings
app.set("port", 8080);


app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use("/payments/stripe", express.raw({ type: "*/*" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(require("./routes.js"));
module.exports = app;