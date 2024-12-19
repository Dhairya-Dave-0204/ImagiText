import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    // retreving usr credentials and finding user from that
    const { userId, prompt } = req.body;
    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.json({ message: "Invalid user or prompt" });
    }

    // case checking for user credit balance
    if (user.creditBalance === 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "Insufficient credit balance",
        creditBalance: user.creditBalance,
      });
    }

    // creating a multipart form data and hitting clipdrop api
    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    // converting the generated image into base64 binary format
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    // updating user credit balance
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      message: "Image generated successfully",
      creditBalance: user.creditBalance - 1,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error generating image",
      error: error.message,
    });
    console.log("Error creating a user" + error);
  }
};
