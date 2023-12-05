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
 *    /endpoint7/{id}:
 *       delete:
 *          summary: Eliminar todos los ingredientes que tengan un stock de 0
 *          tags: [Endpoints]
 *          parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: string
 *              required: true
 *              description: Ingrediente Id
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
 *    /endpoint8/{id}:
 *       put:
 *          summary: Actualizar la hamburguesa clásica por una insertada por el usuario
 *          tags: [Endpoints]
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#components/schemas/Hamburguesas'
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
 *    /endpoint10/{id}:
 *       put:
 *          summary: Encontrar al chefc y cambiarle la especialidad
 *          tags: [Endpoints]
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Chefs'
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
 *    /endpoint13/{id}:
 *       put:
 *          summary: Incrementar el stock de un ingrediente
 *          tags: [Endpoints]
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Ingredientes'
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

/**
 * @swagger
 *    /endpoint17:
 *       get:
 *          summary: Obtener todas las categorias que tengan gourmet en su descripcion
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
 *    /endpoint18:
 *       delete:
 *          summary: Eliminar todas las hamburguesas que tengan menos de 5 ingredientes
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se eliminaron las hamburguesas
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Hamburguesas'
 *             400:
 *                description: No se pudieron eliminar las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint19:
 *       post:
 *          summary: Añadir un chef con la especialidad de cocina asiática
 *          tags: [Endpoints]
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Chefs'
 *          responses:
 *             200:
 *                description: Se añadio la hamburguesa
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Hamburguesas'
 *             400:
 *                description: No se pudieron añadir la hamburguesas            
 */

/**
 * @swagger
 *    /endpoint20:
 *       get:
 *          summary: Ordenar de forma ascendente las hamburguesas con respecto a su precio
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
 *                description: No se pudieron ordenar las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint21:
 *       get:
 *          summary: Obtener los ingredietes que tengan un valor menor que 5 y mayor que 2 
 *          tags: [Endpoints]
 *          responses:
 *             200:
 *                description: Se obtuvieron los ingredientess
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Ingredientes'
 *             400:
 *                description: No se obtuvieron los ingredientes            
 */

/**
 * @swagger
 *    /endpoint22:
 *       get:
 *          summary: Encontrar el ingrediente con nombre pan y cambiarle la descripcion por 'Pan fresco y crujiente'
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
 *                description: No se obtuvieron los ingredientes            
 */

/**
 * @swagger
 *    /endpoint23:
 *       get:
 *          summary: Obtener las hamburguesas que tengan tomate y levhuga dentro de sus ingredientes 
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint24:
 *       get:
 *          summary: Encontrar a todos los chefs menos al Chef A 
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
 *                description: No se obtuvieron los chefs            
 */

/**
 * @swagger
 *    /endpoint25:
 *       put:
 *          summary: Aumentar por 2 el precio de las hamburguesas que su categoria sea gourmet 
 *          tags: [Endpoints]
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Hamburguesas'
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint26:
 *       get:
 *          summary: Obtener los ingredietes ordenados por orden ascendente 
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
 *                description: No se obtuvieron los ingredientes            
 */

/**
 * @swagger
 *    /endpoint27:
 *       get:
 *          summary: Obtener la hamburguesa con el precio mas alto 
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint28:
 *       post:
 *          summary: Obtener la hamburguesa con el precio mas alto 
 *          tags: [Endpoints]
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Hamburguesas'
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint29:
 *       delete:
 *          summary: Eliminar los chefs con especialidad de cocina vegetariana
 *          tags: [Endpoints]
 *          requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Chefs'
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
 *                description: No se obtuvieron los chefs            
 */

/**
 * @swagger
 *    /endpoint30:
 *       get:
 *          summary: Encontrar las hamburguesas que tengan exactamente 7 ingredientes
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint31:
 *       get:
 *          summary: Encontrar las hamburguesas gourmet y ordenarla por el precio
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint32:
 *       get:
 *          summary: Obtener la cantidad de veces que cada ingrediente se encuentra en una hamburguesa
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint33:
 *       get:
 *          summary: Encontrar la cantidad de hamburguesas que ha preparado cada chef
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint34:
 *       get:
 *          summary: Encontrar la categoria que mas se encuentra en las hamburguesas
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint35:
 *       get:
 *          summary: Encontrar el precio total de las hamburguesas que realizó cada chef 
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint36:
 *       get:
 *          summary: Encontrar el ingrediente que no se encuentre en ninguna hamburguesa 
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
 *                description: No se obtuvieron las hamburguesas            
 */


/**
 * @swagger
 *    /endpoint37:
 *       get:
 *          summary: Encontrar la categoria y su descripcion 
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint38:
 *       get:
 *          summary: Encontrar el chef que la suma de los ingredientes de su hamburguesa sea mayor al resto
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint39:
 *       get:
 *          summary: Encontrar el precio promedio de cada categoria de hamburguesa 
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
 *                description: No se obtuvieron las hamburguesas            
 */

/**
 * @swagger
 *    /endpoint40:
 *       get:
 *          summary: Encontrar la hamburguesa mas cara de cada chef y cual fue su precio 
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
 *                description: No se obtuvieron las hamburguesas            
 */

export default router;
