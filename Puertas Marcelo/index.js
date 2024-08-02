const express = require('express'); // importar libreria

const app = express(); // creo el objeto, de esta manera puedo llamar a todos los metodos de express
app.get("/", (require,respose)=>{
    respose.send("<h1>Hola Mundo</h1>");
})// para que no aparezca "Cannot GET /"
app.listen(3000,()=>{
    console.log("Servidor creado con exito http://localhost:3000")
}); // configuro el puerto usado para el server local 
