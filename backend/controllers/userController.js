import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    // retreving credentials from the request body sent by user from login page
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing details for registeration",
      });
    }

    // encrypting the password to provide more security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating a new user in the database
    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    // creating a token for the user for uniquely identifying the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERET);
    res.json({
      success: true,
      message: "User created successfully",
      token,
      user: { name: user.name },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
    console.log("Error creating a user" + error);
  }
};

const loginUser = async (req, res) => {
  try {
    // retreving credentials from the request body sent by user from login page and finding that in DB
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // comparing the password sent by user with the password in DB
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // creating a token for the user for uniquely identifying the user
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECERET);
      res.json({
        success: true,
        message: "User created successfully",
        token,
        user: { name: user.name },
      });
    } else {
      return res.json({ success: false, message: "Invalid password" });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
    console.log("Error creating a user" + error);
  }
};

const userCredits = async (req, res) => {
  // retreving credentials from the request body sent by user from login page and finding that in DB
  try {
    const { userId } = req.body;

    const user = await userModel.findById(userId);
    // retriving the amount of credits user owns 
    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
      message: "Found the requested user",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
    console.log("Error creating a user" + error);
  }
};

export { registerUser, loginUser, userCredits };
