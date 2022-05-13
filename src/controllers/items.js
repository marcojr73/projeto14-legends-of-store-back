import db from "../middlewares/bank.js";

export default async function allItems(req, res){
    try{
        const items = await db.collection("items").find({}).toArray();
        res.send(items);
    }catch (e) {
        res.status(500).send("ocorreu um erro")
    }
}