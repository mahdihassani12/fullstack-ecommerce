const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Some text from app");
});

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
