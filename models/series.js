

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seriesSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    year: {
        type: Number,
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
    episodioSemanal: {
        type: String,
        required: true
    },
    verEnCineTeatro: {
        type: String,
        required: true
    },

});

const Series = mongoose.model("Series", seriesSchema);
module.exports = Series;