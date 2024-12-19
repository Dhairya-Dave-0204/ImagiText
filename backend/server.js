import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"

const port = process.env.PORT || 4000
const app = express()

await connectDB()

app.use(express.json())
app.use(cors())

app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => (
    console.log(`Server is running on port ${port}`)
))