import db from "./bank.js"

export default async function validateUser(req, res, next){
    const user = await db.collection("custumers").findOne({email: req.body.email})
    if(!user){
        return res.status(500).send("Email não cadastrado")
    }
    res.locals.user = user
    next()
}