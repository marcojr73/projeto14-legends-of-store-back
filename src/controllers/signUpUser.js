import bcrypt from 'bcrypt';
import db from "./../middlewares/bank.js";

export async function signUpUser(req, res){
    const {username, email, password, confirmPassword} = req.body
    const encrypted = bcrypt.hashSync(password, 10)
    try {
        await db.collection("costumers").insertOne({
            username, email, password: encrypted
        })
        res.sendStatus(201)
    } catch (e) {
        res.status(500).send("Erro no cadastro")
    }
}