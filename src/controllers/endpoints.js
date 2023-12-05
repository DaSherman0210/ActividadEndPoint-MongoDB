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

const getCategorias = async (req,res) =>{
  try {
    const result = await Categorias.find().toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
const getChefs = async (req,res) =>{
  try {
    const result = await Chefs.find().toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
const getHamburguesas = async (req,res) =>{
  try {
    const result = await Hamburguesas.find().toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
const getIngredientes = async (req,res) =>{
  try {
    const result = await Ingredientes.find().toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

const primerEndpoint = async (req, res) => {
  try {
    const result = await Ingredientes.find({ stock: { $lt: 400 } }).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const segundoEndpoint = async (req, res) => {
  try {
    const query = { categoria: { $eq: "Vegetariana" } };
    const hamburguesa = await Hamburguesas.find(query).toArray();
    res.json(hamburguesa);
  } catch (error) {
    console.log(error);
  }
};

const tercerEndpoint = async (req, res) => {
  try {
    const query = { especialidad: { $eq: "Carnes" } };
    const chef = await Chefs.find(query).toArray();
    res.json(chef);
  } catch (error) {
    console.log(error);
  }
};

const cuartoEndpoint = async (req, res) => {
  try {
    const ingrediente = await Ingredientes.aggregate([
      {
        $project: {
          precioAumentado: { $sum: ["$precio", 1.5] },
        },
      },
    ]).toArray();
    res.json(ingrediente);
  } catch (error) {
    console.log(error);
  }
};

const quintoEndpoint = async (req, res) => {
  try {
      const query = { "chef": { $eq: "ChefB" } }
      const hamburguesa = await Hamburguesas.find(query).toArray();
      res.json(hamburguesa);
  } catch (error) {
      console.log(error);
  }
}

const sextoEndpoint = async (req, res) => {
  try {
      const categoria = await Categorias.aggregate([
          {
              $project: {
                  "_id": 0,
                  "nombre": 1,
                  "descripcion": 1
              }
          }
      ]).toArray();
      res.json(categoria)
  } catch (error) {
      console.log(error);
  }
}

const septimoEndpoint = async (req, res) => {
  try {
      const ingrediente = await Ingredientes.deleteMany({ 'stock': 0 });
      res.json(ingrediente);
  } catch (error) {
      console.log(error);
  }
}

const octavoEndpoint = async (req, res) => {
  try {
      const query = { nombre: "Clásica" };
      const nuevoIngrediente = req.params.ingre;

      if (nuevoIngrediente) {
        const hamburguesa = await Hamburguesas.updateOne(query, { $push: { ingredientes: nuevoIngrediente } });

        res.json(hamburguesa);
      }

  } catch (error) {
      console.log(error);
  }
}

const novenoEndpoint = async (req, res) => {
  try {
      const query = { ingredientes: "Pan integral" }
      const hamburguesa = await Hamburguesas.find(query).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

const decimoEndpoint = async (req, res) => {
  try {
     const query = { nombre: "ChefC" };
     const chef = await Chefs.updateOne(query, { $set: { especialidad: "Cocina Internacional" } });
     res.json(chef)
  } catch (error) {
     console.log(error);
  }
}

const undecimoEndpoint = async (req, res) => {
  try {
    const ingrediente = await Ingredientes.findOne({}, { sort: { precio: -1 } });
    res.json(ingrediente);
  } catch (error) {
      console.log(error);
  }
}

const duodecimoEndpoint = async (req, res) => {
  try {
      const query = { ingredientes: { $ne: "Queso cheddar" } };
      const hamburguesa = await Hamburguesas.find(query).toArray();
      res.json(hamburguesa);
  } catch (error) {
      console.log(error);
  }
}

const decimotercerEndpoint = async (req, res) => {
  try {
      const query = { nombre: "Pan" };
      const ingrediente = await Ingredientes.updateOne(query, { $inc: { stock: 100 } });
      res.json(ingrediente)
  } catch (error) {
      console.log(error);
  }
}

const decimocuartoEndpoint = async (req, res) => {
  try {
      const query = { descripcion: { $regex: /clásico/i } };
      const ingrediente = await Ingredientes.find(query).toArray();
      res.json(ingrediente)
  } catch (error) {
      console.log(error);
  }
}

const decimoquintoEndpoint = async (req, res) => {
  try {
      const query = { precio: { $lte: 9 } };
      const hamburguesa = await Hamburguesas.find(query).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

const decimosextoEndpoint = async (req, res) => {
  try {
     const Chef = await Chefs.countDocuments();
     res.json(Chef);
  } catch (error) {
     console.log(error);
  }
}

const decimoseptimoEndpoint = async (req, res) => {
  try {
      const query = { descripcion: { $regex: /gourmet/i } }
      const categoria = await Categorias.find(query).toArray();
      res.json(categoria);
  } catch (error) {
      console.log(error);
  }
}

const decimooctavoEndpoint = async (req, res) => {
  try {
      const query = { $expr: { $lt: [{ $size: "$ingredientes" }, 5] } }
      await Hamburguesas.deleteMany(query);
      res.json({ message: "Se eliminaron las hamburguesas con menos de 5 ingredientes" });
  } catch (error) {
      console.log(error);
  }
}

const decimonovenoEndpoint = async (req,res) => {
  try {
     const query = {nombre: "ChefD", especialidad: "Cocina Asiática"}
     const chef = await Chefs.insertOne(query);
     res.json(chef); 
  } catch (error) {
     console.log(error);
  }
}

const vigesimoEndpoint = async (req, res) => {
  try {
      const hamburguesa = await Hamburguesas.find().sort({ precio: 1 }).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

const vigesimoprimerEndpoint = async (req, res) => {
  try {
      const query = { precio: { $lt: 5, $gt: 2 } };
      const ingrediente = await Ingredientes.find(query).toArray();
      res.json(ingrediente)
  } catch (error) {
      console.log(error);
  }
}

const vigesimosegundoEndpoint = async (req, res) => {
  try {
      const query = { nombre: "Pan" };
      const ingrediente = await Ingredientes.updateOne(query, { $set: { descripcion: "Pan fresco y crujiente" } });
      res.json(ingrediente);
  } catch (error) {
      console.log(error);
  }
}

const vigesimotercerEndpoint = async (req, res) => {
  try {
      const query = { ingredientes: { $in: ["Tomate", "Lechuga"] } };
      const hamburguesa = await Hamburguesas.find(query).toArray();
      res.json(hamburguesa);
  } catch (error) {
      console.log(error);
  }
}

const vigesimocuartoEndpoint = async (req,res) =>{
  try {
    const query = {nombre: {$ne:"ChefA"}};
    const Chef = await Chefs.find(query).toArray();
    res.json(Chef)
  } catch (error) {
    console.log(error);
  }
}

const vigesimoquintoEndpoint = async (req, res) => {
  try {
      const query = { categoria: /gourmet/i };
      const hamburguesa = await Hamburguesas.updateOne(query, { $inc: { precio: 2 } });
      res.json(hamburguesa);
  } catch (error) {
      console.log(error);
  }
}

const vigesimosextoEndpoint = async (req, res) => {
  try {
      const ingrediente = await Ingredientes.find().sort({ nombre: 1 }).toArray()
      res.json(ingrediente);
  } catch (error) {
      console.log(error);
  }
}

const vigesimoseptimoEndpoint = async (req, res) => {
  try {
      const hamburguesa = await Hamburguesas.find().sort({ precio: -1 }).limit(1).toArray();
      res.json(hamburguesa);
  } catch (error) {
      console.log(error);
  }
}

const vigesimooctavoEndpoint = async (req, res) => {
  try {
      const query = { nombre: /Clásica/i };
      
      const resultado = await Hamburguesas.updateMany(
        query,
        { $push: { ingredientes: "Pepinillos" } }
      );

      if (resultado.nModified === 0) {
        return res.status(404).json({ mensaje: 'No se encontraron hamburguesas.' });
      }

      const hamburguesasActualizadas = await Hamburguesas.find(query).toArray();

      res.json(hamburguesasActualizadas);

  } catch (error) {
      console.log(error);
  }
}

const vigesimonovenoEndpoint = async (req,res) =>{
  try {
     const query = {especialidad: /Cocina Vegetariana/i};
     await Chefs.deleteMany(query);
     res.json({ message: "Se eliminaron los chefs que cocinaban cocina vegetariana" });
  } catch (error) {
     console.log(error);
  }
}

const trigesimoEndpoint = async (req, res) => {
  try {
      const query = { ingredientes: { $size: 7 } };
      const hamburguesa = await Hamburguesas.find(query).toArray();
      res.json(hamburguesa);
  } catch (error) {
      console.log(error);
  }
}

const trigesimoprimerEndpoint = async (req, res) => {
  try {
      const query = { categoria: /gourmet/i };
      const hamburguesa = await Hamburguesas.find(query).sort({ precio: -1 }).limit(1).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

const trigesimosegundoEndpoint = async (req, res) => {
  try {
      const hamburguesa = await Hamburguesas.aggregate([
          {
              $unwind: "$ingredientes"
          },
          {
              $group: {
                  _id: "$ingredientes",
                  numHamburguesas: { $sum: 1 }
              }
          },
          {
              $sort: { _id: 1 }
          }
      ]).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

const trigesimotercerEndpoint = async (req, res) => {
  try {
      const hamburguesa = await Hamburguesas.aggregate([
          {
              $group: {
                  _id: "$chef",
                  numHamburguesas: { $sum: 1 }
              }
          },
          {
              $project: {
                  _id: 0,
                  chef: "$_id",
                  numHamburguesas: 1
              }
          }
      ]).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

const trigesimocuartoEndpoint = async (req, res) => {
  try {
      const hamburguesa = await Hamburguesas.aggregate([
          {
              $group: {
                  _id: "$categoria",
                  numCategoria: { $sum: 1 }
              }
          },
          {
              $project: {
                  _id: 0,
                  categoria: "$_id",
                  numCategoria: 1
              }
          },
          {
              $sort: { numCategoria: -1 }
          }
      ]).limit(1).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

const trigesimoquintoEndpoint = async (req,res)=>{
  try {
    const lista = await Hamburguesas.aggregate([
      {
        $lookup: {
          from: "Chefs",
          localField: "chef",
          foreignField: "nombre",
          as: "jijiji",
        },
      },
      {
        $lookup: {
          from: "Ingredientes",
          localField: "ingredientes",
          foreignField: "nombre",
          as: "jojojoj",
        },
      },
      {
        $unwind: "$jojojoj"
      },
      {
        $unwind: "$jijiji"
      },
      {
        $group: {
          _id: "$jijiji.nombre",
          Total: { $sum: "$jojojoj.precio" },
        },
      }
    ]).toArray();
    res.json(lista)
  } catch (error) {
    console.log(error);
  }
}

const trigesimosextoEndpoint = async (req,res)=>{
  try {
      const hamburguesa = await Ingredientes.aggregate([
        {
          $lookup: {
            from: "Hamburguesas",
            localField: "nombre",
            foreignField: "ingredientes",
            as: "hamburguesas_con_este_ingrediente",
          },
        },
        {
          $match: {
            hamburguesas_con_este_ingrediente: { $size: 0 },
          },
        },
        {
            $project: {
                "_id": 0,
                "nombre": 1
            }
        }
      ]).toArray();
      res.json(hamburguesa)
  } catch (error) {
    console.log(error);
  }
}

const trigesimoseptimoEndpoint = async (req,res)=>{
  try {
    const hamburguesa = await Hamburguesas.aggregate([
      {
          $lookup: {
            from: "Categorias",
            localField: "categoria",
            foreignField: "nombre",
            as: "jujuju"
          }
      },
      {
          $unwind: "$jujuju"
      },
      {
          $project: {
            "jujuju._id": 0,
            "jujuju.nombre": 0,
            "_id": 0,
            "ingredientes": 0,
            "chef": 0,
            "__v": 0,
            "precio": 0,
            "nombre": 0
          }
      }
  ]).toArray();
  res.json(hamburguesa);
  } catch (error) {
    console.log(error);
  }
}

const trigesimooctavoEndpoint = async (req, res) => {
  try {
      const hamburguesa = await Hamburguesas.aggregate([
          {
              $unwind: "$ingredientes"
          },
          {
              $group: {
                  _id: "$chef",
                  totalIngredientes: { $sum: 1 }
              }
          },
          {
              $sort: { totalIngredientes: -1 }
          },
          {
              $limit: 1
          },
          {
              $project: {
                  _id: 0,
                  chef: "$_id",
                  totalIngredientes: 1
              }
          }
      ]).toArray();
      res.json(hamburguesa);
  } catch (error) {
      console.log(error);
  }
}

const trigesimonovenoEndpoint = async (req, res) => {
  try {
      const hamburguesa = await Hamburguesas.aggregate([
          {
              $group: {
                  _id: "$categoria",
                  precioPromedio: { $avg: "$precio" }
              }
          },
          {
              $project: {
                  _id: 0,
                  categoria: "$_id",
                  precioPromedio: 1
              }
          }
      ]).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

const cuadragesimo = async (req, res) => {
  try {
      const hamburguesa = await Hamburguesas.aggregate([
          {
              $group: {
                  _id: "$chef", 
                  hamburguesaMasCara: { $max: { nombre: "$nombre", precio: "$precio" } } 
              }
          },
          {
              $project: {
                  _id: 0,
                  chef: "$_id",
                  hamburguesaMasCara: 1
              }
          }
      ]).toArray();
      res.json(hamburguesa)
  } catch (error) {
      console.log(error);
  }
}

export {getCategorias,getChefs,getHamburguesas,getIngredientes, primerEndpoint, segundoEndpoint, tercerEndpoint, cuartoEndpoint, quintoEndpoint, sextoEndpoint, septimoEndpoint, octavoEndpoint,novenoEndpoint, decimoEndpoint, undecimoEndpoint, duodecimoEndpoint, decimotercerEndpoint, decimocuartoEndpoint, decimoquintoEndpoint, decimosextoEndpoint, decimoseptimoEndpoint, decimooctavoEndpoint, decimonovenoEndpoint,vigesimoEndpoint, vigesimoprimerEndpoint, vigesimosegundoEndpoint, vigesimotercerEndpoint,vigesimocuartoEndpoint, vigesimoquintoEndpoint, vigesimosextoEndpoint, vigesimoseptimoEndpoint, vigesimooctavoEndpoint, vigesimonovenoEndpoint,trigesimoEndpoint,trigesimoprimerEndpoint, trigesimosegundoEndpoint, trigesimotercerEndpoint, trigesimocuartoEndpoint , trigesimoquintoEndpoint, trigesimosextoEndpoint , trigesimoseptimoEndpoint , trigesimooctavoEndpoint , trigesimonovenoEndpoint, cuadragesimo};
