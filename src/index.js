import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import signInRouter from "./routes/signInRoute.js";
import signUpRouter from "./routes/signUpRoute.js"


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(signInRouter)
app.use(signUpRouter)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("servidor em pé na porta ", process.env.PORT)
})
