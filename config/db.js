const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    });
    console.log("MongoDB connected.");
  } catch (e) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
