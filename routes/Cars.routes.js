const CarsController = require("../controller/Cars.controller")

module.exports = server => {
    server.get("/cars", (req, res) => 
    CarsController.getAll(req, res))

    server.get("/cars/:id", (req, res) => 
    CarsController.get(req, res)) 

    server.post("/cars", (req, res) => {
        CarsController.create(req, res)
    })

    server.delete("/cars/:id", (req, res) => {
        CarsController.delete(req, res)
    })

    server.put("/cars", (req, res) => {
        CarsController.modif(req, res)
    })

    server.get("*", (req, res) => {
        res.status(404).send("rien a faire ici")
    } )
}