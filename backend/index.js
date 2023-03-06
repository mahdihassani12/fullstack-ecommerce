const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Connection to database
const connectDB = require("./config/db");
connectDB();

// API integration
app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/products"));

// Listener to server port
app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
