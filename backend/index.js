const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const connectDB = require("./config/db");
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
