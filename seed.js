const mongoose = require("mongoose");
const User = require("../models/User");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/fitquest";

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error("MongoDB connection error:", err));

const users = [
  { name: "Ankit", email: "ankit@example.com", age: 22 },
  { name: "Riya", email: "riya@example.com", age: 21 },
  { name: "Sam", email: "sam@example.com", age: 25 },
];

const seedUsers = async () => {
  try {
    await User.deleteMany(); // clear existing users
    await User.insertMany(users);
    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedUsers();
