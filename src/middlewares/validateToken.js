import db from "./bank.js";


export default async function validateToken(req, res, next){
    const {authorization} = req.headers;
    const token = authorization.substring("Bearer ".length)
    try{
        const online = await db.collection("sessions").findOne({token})
        console.log(online)
        if(!online){
            return res.send("You were disconnected, please sign in again").status(498)
        }
    }catch{
        res.sendStatus(422);
    }

    next()
}