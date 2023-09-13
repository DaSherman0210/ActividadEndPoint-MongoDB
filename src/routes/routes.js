import express from "express";
import {
  primerEndpoint,
  segundoEndpoint,
  tercerEndpoint,
  cuartoEndpoint,
  quintoEndpoint,
  sextoEndpoint,
  septimoEndpoint,
  octavoEndpoint,
  getHamburguesas,
  getIngredientes,
  getCategorias,
  getChefs,
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

export default router;
