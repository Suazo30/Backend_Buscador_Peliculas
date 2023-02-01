
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({

    price: {
        type: Number,
        require: true
    },
    rentalDate: {
        type: Date,
        require: true
    },
    returnDate: {
        type: Date,
        require: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    serieId: {
        type: Schema.Types.ObjectId, ref: 'Serie',
        required: true
    },
    nameSerie: {
        type: String,
        require: true,
    },
});

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;