import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/routes.js";

import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./swaggerConfig.js";

const app = express();

dotenv.config();

app.use("/", router);
app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const port = process.env.PORT98348;

app.use(express.json());

app.listen(port, ()=>{
   console.log(`El servidor se ha iniciado en el puerto ${port}`);
})