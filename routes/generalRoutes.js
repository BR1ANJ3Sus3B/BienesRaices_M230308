import express from 'express'

const router = express.Router()



router.get("/", function(req, res){
    res.send("Hola desde la web en NodeJS")
})

router.get("/quienEres", function(req, res){
    res.json({
        "nombre" : "Brian jesus mendoza marquez",
        "carrera" : "TI DSM",
        "grado" : "4",
        "grupo" : "B",
        "Signo zodiacal" : "Aries"
    })
})

export default router;