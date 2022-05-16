import db from "../middlewares/bank.js"
import { v4 } from "uuid";

export default async function signInUser(req, res){
    const user = res.locals.user
    try {
        const token = v4()
        await db.collection("sessions").insertOne({
            token: token,
            id: user.id
        })
        res.status(200).send({ token })
    } catch (e) {
        res.status(500).send("ocorreu um erro")
    }
}