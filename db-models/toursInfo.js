const mongoose = require("mongoose");
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;
const ToursInfoSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    adultPrice: {
        type: SchemaTypes.Double,
        required: true,
    },
    childPrice: {
        type: SchemaTypes.Double,
        required: true,
    },
    departureDate: {
        type: String,
        required: true,
    },
    noOfDays: {
        type: SchemaTypes.Double,
        required: true,
    },
});
const ToursInfo = mongoose.model("ToursInfo", ToursInfoSchema);

module.exports = ToursInfo;
