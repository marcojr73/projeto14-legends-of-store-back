import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import signInRouter from "./routes/signInRoute.js";
import signUpRouter from "./routes/signUpRoute.js"
import itemsRouter from "./routes/itemsRoute.js";
import championsRoute from "./routes/championsRoute.js"
import purchaseRoute from "./routes/purchaseRoute.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(championsRoute)
app.use(signInRouter)
app.use(signUpRouter)
app.use(itemsRouter)
app.use(purchaseRoute)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("servidor em pé na porta ", process.env.PORT)
})
