const mongoose = require("mongoose");

const DepartChargeSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    charges: {
        type: Number,
        required: true
    }
});

const DepartCharge = mongoose.model('Departurecharge', DepartChargeSchema);

module.exports = DepartCharge;
