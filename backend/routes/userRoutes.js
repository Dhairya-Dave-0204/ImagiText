import { registerUser, loginUser } from "../controllers/userController.js";
import express from "express"

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

export default userRouter

// path for operation of api routing for user controlling
// localhost:4000/api/user/register
// localhost:4000/api/user/login