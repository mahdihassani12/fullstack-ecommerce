const mongoose = require("mongoose");
const config = require("./key");
const db = config.mongoURI;

const connectDB = async () => {
  try {

    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(" Database connected. ");
  } catch (error) {
    console.error(" Failed to connect to database ", error);
    process.exit(1);
  }
};

module.exports = connectDB;