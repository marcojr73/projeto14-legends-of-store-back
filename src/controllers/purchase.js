import db from "../middlewares/bank.js";

export default async function purchase(req, res){
    console.log(req.body)
    try {
        const purchase = await db.collection("purchases").insertOne({purchase: req.body})
    } catch (e) {
        res.status(400).send("ocorreu um err", e)
    }
}