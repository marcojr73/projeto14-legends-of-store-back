import bcrypt from "bcrypt";
import db from "./../middlewares/db.js";

export async function signUp(req, res){
    const {username, email, password, confirmPassword} = req.body;
    const encrypted = bcrypt.hashSync(password, 10);

    try{
        await db.collection("participants").insertOne({
            username, email, password
        })
    }catch{
        res.status(500).send("Erro ao cadastrar o usuário")
    }
}