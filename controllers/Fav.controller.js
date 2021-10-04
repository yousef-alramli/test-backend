"use strict";
const axios = require("axios");
const { favModel } = require("../models/Fav.modles");

const handlefruit = async (req, res) => {
    let url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    let data = await axios.get(url);
    await res.send(data.data)
}

const handleGetFav = (req, res) => {
    favModel.find().then(data => {
        res.send(data)
    })
}
const handleCreateFav = async (req, res) => {
    let bodyFav = req.body;
    let newFav = favModel(bodyFav);
    await newFav.save();
    await favModel.find().then(data => {
        res.send(data)
    })
}

const handleDelteFav = (req, res) => {
    let favId = req.params.id;
    favModel.findByIdAndDelete({ _id: favId }).then(() => {
        favModel.find().then(data => {
            res.send(data)
        })
    })
}

const handleUpdateFav = async (req, res) => {
    let favId = req.params.id;
    let favBody = req.body;
    await favModel.findOne({ _id: favId }).then(async favs => {

        favs.strDrink = favBody.strDrink,
            favs.strDrinkThumb = favBody.strDrinkThumb,
            favs.idDrink = favBody.idDrink
        await favs.save();
    })
    await favModel.find().then(data => {
        res.send(data)
    })
}
module.exports = {
    handlefruit,
    handleGetFav,
    handleCreateFav,
    handleDelteFav,
    handleUpdateFav,
}