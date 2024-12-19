import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"

// basic setup of the app
const port = process.env.PORT || 4000
const app = express()

await connectDB()

app.use(express.json())
app.use(cors())

// routing od the app
app.use("/api/user", userRouter)
app.use("/api/image", imageRouter)

// configuring and starting the server
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => (
    console.log(`Server is running on port ${port}`)
))