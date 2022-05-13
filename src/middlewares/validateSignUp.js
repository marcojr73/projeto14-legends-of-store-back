import Joi from "joi";
import db from "./bank.js";


export default async function validateSignUp(req, res, next){
    const signUpSchema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.ref('password')
    })
    
    const valid = await signUpSchema.validateAsync(req.body)
    if(valid.error){
        return res.status(422).send("Preencha os dados corretamente")
    }

    const alreadyExists = await db.collection("customers").findOne({email: req.body.email})
    if (alreadyExists){
        return res.status(409).send("Email já cadastrado")
    }

    next()
}