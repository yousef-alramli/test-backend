"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { handlefruit, handleGetFav, handleCreateFav, handleDelteFav, handleUpdateFav } = require("./controllers/Fav.controller");
app.use(cors());
require('dotenv').config();
app.use(express.json());

const MONGO_SERVER = process.env.MONGO_SERVER;
mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(process.env.PORT);

app.get("/fruit", handlefruit);

app.get("/fav",handleGetFav);
app.post ("/createFav", handleCreateFav);
app.delete("/deleteFav/:id", handleDelteFav);
app.put("/updateFav/:id",handleUpdateFav);