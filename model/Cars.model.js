const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const carsSchema = new Schema ({
    id: String,
    name: String,
    options: {
        aircondition: Boolean,
        navigation: Boolean,
        transmission: String,
        person: Number
    },
    image: String,
    price: Number,
    reservations: {
        type : Number, 
        default : 0
    }
})

const carsModel = mongoose.model("cars", carsSchema)

module.exports = carsModel

