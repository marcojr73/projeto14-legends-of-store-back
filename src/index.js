import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import sigInRouter from "./routes/signInRoute.js";


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(sigInRouter)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("servidor em pé na porta ", process.env.PORT)
})
