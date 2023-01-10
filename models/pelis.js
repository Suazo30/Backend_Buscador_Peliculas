

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peliSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    toprated: {
        type: String,
        required: true
    },
});

const Peli = mongoose.model("Peli", peliSchema);
module.exports = Peli;
