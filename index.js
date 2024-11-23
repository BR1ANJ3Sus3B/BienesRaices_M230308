import generalRoutes from'./routes/generalRoutes.js'

import express from 'express'

const port = 3006 ;

const app = express ();

app.listen(port, ()=>
console.log(`La aplicacion ha iniciado en el puerto :${port}`))

app.get ("/",function(req,res){
    res.send("Hola desde la web en NodeJS")
})
app.get("/quienEres",function(req,res){
    res.json({
        "NOmbre":"Brian jesus mendoza marquez",
        "Carrera":"TI DSM ",
        "Grado":"4",
        "Grupo":"B"

    })
})
app.use("/",generalRoutes);