import db from "../middlewares/bank.js"
import bcrypt from 'bcrypt';
import { v4 } from "uuid";


export default async function signIn(req, res){
    const user = await db.collection("customers").findOne({email: req.body.email})
    if(!user){
        return res.status(500).send("Email não cadastrado")
    }

    const answer = bcrypt.compareSync(req.body.password, user.password)
    if(!answer) {
        return res.status(500).send("Senha incorreta")
    }

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