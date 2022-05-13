import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import sigInRouter from "./routes/signInRoute.js";
import signUpRouter from "./routes/signUpRoute.js"
import itemsRouter from "./routes/itemsRoute.js";


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(sigInRouter)
app.use(signUpRouter)
app.use(itemsRouter)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("servidor em pé na porta ", process.env.PORT)
})
