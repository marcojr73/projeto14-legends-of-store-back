import db from "../middlewares/bank.js";

export default async function purchase(req, res){
    const user = res.locals.user
    
    try {
        const purchase = await db.collection("purchases").insertOne({purchase: req.body.bag, user})
    } catch (e) {
        res.status(400).send("ocorreu um err", e)
    }
}