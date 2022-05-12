import {MongoClient} from "mongodb"
import dotenv from "dotenv"

dotenv.config()

let db = null
const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect()
    db = mongoClient.db("store_of_legends") 
    console.log("conexão com o banco de dados estabelecida")
} catch (e) {
    console.log("erro ao se conectar com o banco de dados", e)
}

export default db