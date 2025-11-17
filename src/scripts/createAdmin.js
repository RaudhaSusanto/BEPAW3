const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
require("dotenv").config();

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to DB");

  const email = "admin@ugm.ac.id";  
  const password = "admin123";      
  const hashedPassword = await bcrypt.hash(password, 10);

  const adminExists = await User.findOne({ email });
  if (adminExists) {
    console.log("Admin already exists");
    process.exit();
  }

  await User.create({
    email,
    password: hashedPassword,
    role: "admin",
    isVerified: true,
    isClaimed: true,
    name: "Super Admin"
  });

  console.log("Admin created:", email);
  process.exit();
}

createAdmin();
