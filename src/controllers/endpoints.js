import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const bases = process.env.MONGODBURI;
const nombreBase = "Hamburgueseria";

const client = new MongoClient(bases);
await client.connect();
const db = client.db(nombreBase);

//* Diferentes collecciones

const Categorias = db.collection("Categorias");
const Chefs = db.collection("Chefs");
const Hamburguesas = db.collection("Hamburguesas");
const Ingredientes = db.collection("Ingredientes");

const primerEndpoint =  async (req,res)=>{
   try {
      const result = await Categorias.find({stock: {$lt: 400}}).toArray();
      if (result.length == 0) {
         res.status(404).send("No se encontraron ingredientes que cumplieran la condicion")
      }
      res.json(result)
   } catch (error) {
      console.log(error);
      throw new Error();
   }
}

const segundoEndpoint = async (req,res) => {
   try {
      const query = { "categoria": { $eq: "Vegetariana" } }
      const hamburguesa = await Hamburguesas.find(query).toArray();
      res.json(hamburguesa);
   } catch (error) {
      console.log(error);
   }
}

export {primerEndpoint, segundoEndpoint};