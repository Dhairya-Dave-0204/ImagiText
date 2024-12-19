import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"

const port = process.env.PORT || 4000
const app = express()

await connectDB()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => (
    console.log(`Server is running on port ${port}`)
))