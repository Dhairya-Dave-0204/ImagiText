import userModel from "../models/userModel.js";
import transactionModel from "../models/transactionModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";

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

// creating a new instance of Razorpay
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// creating a payment gateway for the user to pay for the credits
const paymentRazorpay = async (req, res) => {
  try {
    const { userId, planId } = req.body;
    const userData = await userModel.findById(userId);

    if (!userId || !planId) {
      return res.json({ success: false, message: "Invalid user or plan" });
    }

    let credits, plan, amount, date;

    switch (planId) {
      case "Basic":
        plan = "Basic";
        credits = 10;
        amount = 100;
        break;

      case "Advanced":
        plan = "Advanced";
        credits = 100;
        amount = 500;
        break;

      case "Business":
        plan = "Business";
        credits = 300;
        amount = 1000;
        break;

      default:
        return res.json({ success: false, message: "Invalid plan" });
    }

    date = Date.now();

    const transcationData = {
      userId,
      plan,
      credits,
      amount,
      date,
    };

    const newTransaction = await transactionModel(transcationData).save();

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY || "INR",
      receipt: newTransaction._id.toString(),
    };

    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: "Failed to make payment" });
      }
      return res.json({ success: true, order });
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in payment" });
  }
};

const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      const transactionData = await transactionModel.findById(orderInfo.receipt);
      if (!transactionData) {
        console.log("Transaction not found");
        return res.json({ success: false, message: "Transaction not found" });
      }
      if (transactionData.payment) {
        return res.json({
          success: false,
          message: "Payment already verified previously",
        });
      }

      const userData = await userModel.findById(transactionData.userId);

      const creditBalance = userData.creditBalance + transactionData.credits;

      await userModel.findByIdAndUpdate(userData._id, { creditBalance });

      await transactionModel.findByIdAndUpdate(transactionData._id, {  payment: true });

      return res.json({ success: true, message: "Payment verified successfully and Credits added" });
    } else {
      res.json({ success: false, message: "Payment failed or not verified" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in payment verification" });
  }
};

export { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay };
