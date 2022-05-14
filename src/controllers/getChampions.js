import db from "../middlewares/bank.js";

export default async function getChampions(req, res){
    try{
        const champions = await db.collection("champions").find({}).toArray();
        res.send(champions);
    }catch (e) {
        res.status(500).send("ocorreu um erro")
    }
}