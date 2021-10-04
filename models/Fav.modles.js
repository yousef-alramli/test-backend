"use strict";
const mongoose = require("mongoose")

const favSchema = new mongoose.Schema({
    strDrink: String,
    strDrinkThumb: String,
    idDrink: Number
});

const favModel = mongoose.model("newfavs", favSchema);

module.exports = { favModel }