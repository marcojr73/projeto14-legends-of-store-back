import joi from "joi";
import db from "./bank.js";

export async function validSignUp(req, res, next){
    const signUpSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required,
        password: joi.string().required(),
        confirmPassword: joi.ref('password')
    })

    const valid = signUpSchema.validate(req.body);
    if(valid.error){
        return res.status(422).send("Preencha os dados corretamente")
    }

    const alreadyExists = await db.collection("costumers").findOne({email: req.body.email})
    if (alreadyExists){
        return res.status(409).send("Email já cadastrado")
    }

    next()
}