import swaggerJSDoc from "swagger-jsdoc";

const options = {
    swaggerDefinition:{
        openapi: '3.0.0',
        info: {
            title: "Hamburgueseria API",
            version: '3.0.0',
            description: 'Hamburgueseria API es un backend con 40 endpoints para hamburgueserías'
        }
    },
    apis:[
        "./src/routes/routes.js"
    ]
}

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;