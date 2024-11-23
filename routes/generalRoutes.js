import express from 'express'
const router = express.Router()



router.get ("/",function(req,res){
    res.send("Hola desde la web en NodeJS")
})
router.get("/quienEres",function(req,res){
    res.json({
        "NOmbre":"Brian jesus mendoza marquez",
        "Carrera":"TI DSM ",
        "Grado":"4",
        "Grupo":"B"

    })
})
export default router;