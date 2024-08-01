const mysql = require('mysql');
let conect = mysql.createConnection({
    host:"localhost",
    database: "puertas",
    user:"Lautaro",
    password:""
});

conect.connect(function(error){
    if(error)
    {
        throw error;
    }
    else{
        console.log("Conexion exitosa")
    }
})

conect.query("SELECT * FROM `materia prima`", (error, results)=>{
    if(error){
        throw error
    }else{
        console.log(results)
    }
})

//let name = document.getElementById("name").value
//let price = document.getElementById("price").value
//let unit = document.getElementById("unit").value

/* INSERTAR
conect.query("INSERT INTO `materia prima` (`ID`, `Nombre`, `Precio Unitario`, `Unidades`) VALUES (NULL, 'Madera de pino', '20', '4')", (error, results) =>{
    if(error){
        throw error
    }else{
        console.log("datos ingresados")
    }
}) */
/* MODIFICAR
conect.query("UPDATE `materia prima` SET Nombre = 'Madera abedul' WHERE `materia prima`.`ID` = 6", (error, results)=>{
    if(error)
    {
        throw error
    }else{
        console.log("Datos modificados")
    }
}) */
conect.query("SELECT * FROM `materia prima`", (error, results)=>{
    if(error){
        throw error
    }else{
        console.log(results)
    }
})
/*DELETE
conect.query("DELETE FROM `materia prima` WHERE `ID` = 6", (error, results)=>{
    if(error){
        throw error
    }else{
        console.log(results)
    }
})*/

conect.end();