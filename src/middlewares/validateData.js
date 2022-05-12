import joi from "joi"


const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    champion: joi.string().required()
});

export default async function validateData(req, res, next){
    const validate = await loginSchema.validateAsync(req.body)
    if (!validate) {
        return res.status(401).send("você não preencheu corretamente todos os campos")
    }
    next()
}