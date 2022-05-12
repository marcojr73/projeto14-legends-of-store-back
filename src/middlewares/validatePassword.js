import bcrypt from 'bcrypt';

export default async function validatePassword(req, res, next){
    const user = res.locals.user

    const answer = bcrypt.compareSync(req.body.password, user.password)
    if(!answer) {
        return res.status(500).send("Senha incorreta")
    }
    next()
}