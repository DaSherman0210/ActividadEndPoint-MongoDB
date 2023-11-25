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
 *          summary: Obtener hamburguesas
 *          tags: [GETS-Generales]
 *          responses:
 *             200:
 *                description: Se obtuvieron las hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Hamburguesas'
 *             400:
 *                description: No se pudieron obtener las hamburguesas            
 */

/**
 * @swagger
 *    /ingredientes:
 *       get:
 *          summary: Obtener ingredientes
 *          tags: [GETS-Generales]
 *          responses:
 *             200:
 *                description: Se obtuvieron los ingredientes
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Ingredientes'
 *             400:
 *                description: No se pudieron obtener los ingredientes            
 */

/**
 * @swagger
 *    /categorias:
 *       get:
 *          summary: Obtener categorias
 *          tags: [GETS-Generales]
 *          responses:
 *             200:
 *                description: Se obtuvieron los categorias
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Categorias'
 *             400:
 *                description: No se pudieron obtener los categorias            
 */

/**
 * @swagger
 *    /chefs:
 *       get:
 *          summary: Obtener chefs
 *          tags: [GETS-Generales]
 *          responses:
 *             200:
 *                description: Se obtuvieron los chefs
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Chefs'
 *             400:
 *                description: No se pudieron obtener los chefs            
 */

//TODO -- GETS ENDPOINTS

/**
 * @swagger
 *    /endpoint1:
 *       get:
 *          summary: Obtener los ingredientes donde el stock sea menor a 400
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los ingredientes
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Ingredientes'
 *             400:
 *                description: No se pudieron obtener los ingredientes            
 */

/**
 * @swagger
 *    /endpoint2:
 *       get:
 *          summary: Obtener todas las hamburguesas donde la categoria sea vegetariana
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron las hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Hamburguesas'
 *             400:
 *                description: No se pudieron obtener las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint3:
 *       get:
 *          summary: Obtener todos los chefs con especialidad en carnes
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los chefs
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Chefs'
 *             400:
 *                description: No se pudieron obtener los chefs            
 */

/**
 * @swagger
 *    /endpoint4:
 *       get:
 *          summary: Aumentar el precio de todos los ingredientes en 1.5
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se aumento con exito
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Ingredientes'
 *             400:
 *                description: No se pudo aumentar el precio          
 */

/**
 * @swagger
 *    /endpoint5:
 *       get:
 *          summary: Obtener todas las hamburguesas preparadas por el chefB
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron las hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Hamburguesas'
 *             400:
 *                description: No se pudieron obtener las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint6:
 *       get:
 *          summary: Obtener todas las categorias
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron las categorias
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Categorias'
 *             400:
 *                description: No se pudieron obtener las categorias            
 */

/**
 * @swagger
 *    /endpoint7:
 *       get:
 *          summary: Eliminar todos los ingredientes que tengan un stock de 0
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los ingredientes
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Ingredientes'
 *             400:
 *                description: No se pudieron obtener los ingredientes            
 */

/**
 * @swagger
 *    /endpoint8:
 *       get:
 *          summary: Actualizar la hamburguesa clásica por una insertada por el usuario
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron las hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Hamburguesas'
 *             400:
 *                description: No se pudieron obtener las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint9:
 *       get:
 *          summary: Encontrar todas las hamburguesas que tenga entre sus ingredientes el pan integral
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron las hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Hamburguesas'
 *             400:
 *                description: No se pudieron obtener las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint10:
 *       get:
 *          summary: Encontrar al chefc y cambiarle la especialidad
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los chefs
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Chefs'
 *             400:
 *                description: No se pudieron obtener los chefs            
 */

/**
 * @swagger
 *    /endpoint11:
 *       get:
 *          summary: Obtener el ingrediente con el precio mas bajo
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los ingredientes
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Ingredientes'
 *             400:
 *                description: No se pudieron obtener los ingredientes            
 */

/**
 * @swagger
 *    /endpoint12:
 *       get:
 *          summary: Encontrar las hamburguesas que entre sus ingredientes no se encuentre el queso cheddar
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron las hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Hamburguesas'
 *             400:
 *                description: No se pudieron obtener las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint13:
 *       get:
 *          summary: Incrementar el stock de un ingrediente
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los ingredientes
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Ingredientes'
 *             400:
 *                description: No se pudieron obtener los ingredientes            
 */

/**
 * @swagger
 *    /endpoint14:
 *       get:
 *          summary: Obtener un ingrediente donde su descripcion contenga la palabra clasico
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los ingredientes
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Ingredientes'
 *             400:
 *                description: No se pudieron obtener los ingredientes            
 */

/**
 * @swagger
 *    /endpoint15:
 *       get:
 *          summary: Obtener todas las hamburguesas donde el precio sea menor a 9
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/hamburguesas'
 *             400:
 *                description: No se pudieron obtener los hamburguesas            
 */

/**
 * @swagger
 *    /endpoint16:
 *       get:
 *          summary: Obtener todos los chefs con especialidad en carnes
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los chefs
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Chefs'
 *             400:
 *                description: No se pudieron obtener los chefs            
 */

export default router;
