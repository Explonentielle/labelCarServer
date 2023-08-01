const CarsModel = require("../model/Cars.model")

module.exports = {
    getAll(req, res) {
        CarsModel.find().then(cars => {
            res.send(cars)
        }).catch(err => {
            res.status(404).send({ error: "voitures non trouvé" })
        })
    },

    get(req, res) {
        const id = req.params.id

        CarsModel.findById(id).then(car => {
            if (car) {
                res.send(car)
            }
            else {
                res.status(404).send({ error: "voiture non trouvé" })
            }
        }).catch(err => {
            res.status(500).send({ error: err.message })
        })
    },

    create(req, res) {
        const car = new CarsModel({
            id: req.body.id,
            name: req.body.name,
            options: {
                aircondition: req.body.options.aircondition,
                navigation: req.body.options.navigation,
                transmission: req.body.options.transmission,
                person: req.body.options.person
            },
            image: req.body.image,
            price: req.body.price,
            reservations: req.body.reservations
        })

        car.save().then(() => res.send("voiture ajouté avec succés")).catch(err => {
            res.status(404).send({ error: err.message })
        })
    },


    modif(req, res) {
        const id = req.body._id;
        CarsModel.findByIdAndUpdate(
            id,
            {
                id: req.body.id,
                name: req.body.name,
                options: {
                    aircondition: req.body.options.aircondition,
                    navigation: req.body.options.navigation,
                    transmission: req.body.options.transmission,
                    person: req.body.options.person,
                },
                image: req.body.image,
                price: req.body.price,
                reservations: req.body.reservations,
            },
        )
            .then((updatedCar) => {
                if (!updatedCar) {
                    return res.status(404).send({ error: 'Voiture non trouvée' });
                }
                res.send('Voiture mise à jour avec succès');
            })
            .catch((err) => {
                res.status(500).send({ error: err.message });
            })
    },


    delete(req, res) {
        const id = req.params.id
        CarsModel.findByIdAndDelete(id).then(car => res.send(
            `supression de la voiture ${car.name}`)).catch(err => {
                res.status(500).send({ error: err.message })
            })
    }
}