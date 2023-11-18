import express from "express";
import {
  getHamburguesas,
  getIngredientes,
  getCategorias,
  getChefs,
  primerEndpoint,
  segundoEndpoint,
  tercerEndpoint,
  cuartoEndpoint,
  quintoEndpoint,
  sextoEndpoint,
  septimoEndpoint,
  octavoEndpoint,
  novenoEndpoint,
  decimoEndpoint,
  undecimoEndpoint,
  duodecimoEndpoint,
  decimotercerEndpoint,
  decimocuartoEndpoint,
  decimoquintoEndpoint,
  decimosextoEndpoint,
  decimoseptimoEndpoint,
  decimooctavoEndpoint,
  decimonovenoEndpoint,
  vigesimoEndpoint,
  vigesimoprimerEndpoint,
  vigesimosegundoEndpoint,
  vigesimotercerEndpoint,
  vigesimocuartoEndpoint,
  vigesimoquintoEndpoint,
  vigesimosextoEndpoint,
  vigesimoseptimoEndpoint,
  vigesimooctavoEndpoint,
  vigesimonovenoEndpoint,
  trigesimoEndpoint,
  trigesimoprimerEndpoint,
  trigesimosegundoEndpoint,
  trigesimotercerEndpoint,
  trigesimocuartoEndpoint,
  trigesimoquintoEndpoint,
  trigesimosextoEndpoint,
  trigesimoseptimoEndpoint,
  trigesimooctavoEndpoint,
  trigesimonovenoEndpoint,
  cuadragesimo
} from "../controllers/endpoints.js";

const router = express.Router();


router.get("/hamburguesas", getHamburguesas);
router.get("/ingredientes", getIngredientes);
router.get("/categorias", getCategorias);
router.get("/chefs", getChefs);
router.get("/endpoint1", primerEndpoint);
router.get("/endpoint2", segundoEndpoint);
router.get("/endpoint3", tercerEndpoint);
router.get("/endpoint4", cuartoEndpoint);
router.get("/endpoint5", quintoEndpoint);
router.get("/endpoint6", sextoEndpoint);
router.get("/endpoint9", novenoEndpoint);
router.get("/endpoint11", undecimoEndpoint);
router.get("/endpoint12", duodecimoEndpoint);
router.get("/endpoint14", decimocuartoEndpoint);
router.get("/endpoint15", decimoquintoEndpoint);
router.get("/endpoint16", decimosextoEndpoint);
router.get("/endpoint17", decimoseptimoEndpoint);
router.get("/endpoint20", vigesimoEndpoint);
router.get("/endpoint21", vigesimoprimerEndpoint);
router.get("/endpoint22", vigesimosegundoEndpoint);
router.get("/endpoint23", vigesimotercerEndpoint);
router.get("/endpoint24", vigesimocuartoEndpoint);
router.get("/endpoint26", vigesimosextoEndpoint);
router.get("/endpoint27", vigesimoseptimoEndpoint);
router.get("/endpoint30", trigesimoEndpoint);
router.get("/endpoint31", trigesimoprimerEndpoint);
router.get("/endpoint32", trigesimosegundoEndpoint);
router.get("/endpoint33", trigesimotercerEndpoint);
router.get("/endpoint34", trigesimocuartoEndpoint);
router.get("/endpoint35", trigesimoquintoEndpoint);
router.get("/endpoint36", trigesimosextoEndpoint);
router.get("/endpoint37", trigesimoseptimoEndpoint);
router.get("/endpoint38", trigesimooctavoEndpoint);
router.get("/endpoint39", trigesimonovenoEndpoint);
router.get("/endpoint40", cuadragesimo);
router.post("/endpoint19", decimonovenoEndpoint);
router.post("/endpoint28", vigesimooctavoEndpoint);
router.put("/endpoint8/:ingre", octavoEndpoint);
router.put("/endpoint10", decimoEndpoint);
router.put("/endpoint13", decimotercerEndpoint);
router.put("/endpoint25", vigesimoquintoEndpoint);
router.delete("/endpoint7", septimoEndpoint);
router.delete("/endpoint18", decimooctavoEndpoint);
router.delete("/endpoint29", vigesimonovenoEndpoint);

/**
 * @swagger
 *  components:
 *    schemas:
 *      Categorias:
 *        type: object
 *        properties:
 *          nombre:
 *            type: string
 *            description: Nombre de la categoria
 *          descripcion:
 *            type: string
 *            description: Descripcion de la categoria
 *        required:
 *          -nombre
 *          -descripcion
 *        example:
 *          nombre: Cerdo
 *          descripcion: Hamburguesa que contiene de cerdo
 *      Chefs:
 *        type: object
 *        properties:
 *          nombre:
 *            type: string
 *            description: Nombre del chef
 *          especialidad:
 *            type: string
 *            description: Descripcion del chef
 *        required:
 *          -nombre
 *          -especialidad
 *        example:
 *          nombre: Carlitos
 *          especialidad: Comida Asiática
 *      Hamburguesas:
 *        type: object
 *        properties:
 *          nombre:
 *            type: string
 *            description: Nombre de la hamburguesa
 *          categoria:
 *            type: string
 *            description: Categoria a la que pertenece la hamburguesa
 *          ingredientes:
 *            type: array
 *            description: Ingredientes que contiene la hamburguesa
 *          precio:
 *            type: number
 *            description: Precio de la hamburguesa
 *          chef:
 *            type: string
 *            description: Nombre del chef que realizó la hamburguesa
 *        required:
 *          -nombre
 *          -categoria
 *          -ingredientes
 *          -precio
 *          -chef
 *        example:
 *          nombre: piggyHam
 *          categoria: Cerdo
 *          ingredientes: [Pan integral, Queso suizo, Aguacate , Cerdo]
 *          precio: 25000
 *          chef: ChefB
 *      Ingredientes:
 *        type: object
 *        properties:
 *          nombre:
 *            type: string
 *            description: Nombre del ingrediente
 *          descripcion:
 *            type: string
 *            description: Descripcion del ingrediente
 *          precio:
 *            type: number
 *            description: Precio del ingrediente
 *          stock:
 *            type: number
 *            description: Cantidad del ingrediente aun existente
 *        required:
 *          -nombre
 *          -descripcion
 *          -precio
 *          -stock
 *        example:
 *          nombre: Cebolla caramelizada
 *          description: Una cebolla pero caramelizada
 *          precio: 500
 *          stock: 400
 */

//TODO -- GETS GENERALES

/**
 * @swagger
 *    /hamburguesas:
 *       get:
 *          summary: Obtener hamburguesa
 *          tags: [GETS-Generales]
 *          responses:
 *             200:
 *                description: Se obtuvieron las hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/hamburguesas'
 *             400:
 *                description: No se pudieron obtener los alquileres            
 */

/**
 * @swagger
 *    /ingredientes:
 *       get:
 *          summary: Obtener alquileres
 *          tags: [Alquileres]
 *          responses:
 *             200:
 *                description: Se obtuvieron los alquileres
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/alquileres'
 *             400:
 *                description: No se pudieron obtener los alquileres            
 */

/**
 * @swagger
 *    /categorias:
 *       get:
 *          summary: Obtener alquileres
 *          tags: [Alquileres]
 *          responses:
 *             200:
 *                description: Se obtuvieron los alquileres
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/alquileres'
 *             400:
 *                description: No se pudieron obtener los alquileres            
 */

/**
 * @swagger
 *    /chefs:
 *       get:
 *          summary: Obtener alquileres
 *          tags: [Alquileres]
 *          responses:
 *             200:
 *                description: Se obtuvieron los alquileres
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/alquileres'
 *             400:
 *                description: No se pudieron obtener los alquileres            
 */

//TODO -- GETS ENDPOINTS

export default router;
