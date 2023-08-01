const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const server = express();
const routes = require("./routes/Cars.routes")
server.use(express.json())
server.use(cors()); 


server.listen(5500, () => {
    console.log("serveur lancer et a l'ecoute du port 5500")
    mongoose.connect("mongodb://127.0.0.1:27017")

    const db = mongoose.connection;

    db.once("open", () =>
        console.log("connexion a la db reussi")).on("error", error => console.error("probleme de connexion a la base de donné", error))
})

server.get("/", (req, res) => {
    console.log("coucou")

    res.send("bienvenue sur l'API Cars")
})

routes(server)
