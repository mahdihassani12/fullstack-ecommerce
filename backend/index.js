const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

// Connection to database
const connectDB = require("./config/db");
connectDB();

// middlewares
app.use(cors());
app.use(express.json({ extended: false }));

// API integration
app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/products"));
app.use("/api/auth", require("./routes/auth"));

// Listener to server port
app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
