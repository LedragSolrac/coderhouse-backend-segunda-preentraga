const app = require("./app.js");

app.listen(app.get("port"), () => {
  console.log("Server initializated in port " + app.get("port"));
});