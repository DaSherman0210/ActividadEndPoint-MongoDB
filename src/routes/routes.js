import express  from "express";
import { primerEndpoint, segundoEndpoint } from "../controllers/endpoints.js";

const router = express.Router();

router.get('/endpoint1', primerEndpoint);
router.get('/endpoint2', segundoEndpoint);

export default router;