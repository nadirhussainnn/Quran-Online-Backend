const mongoose = require("mongoose");

const parahs = mongoose.Schema({
  parahs: [],
});

module.exports = mongoose.model("Parah", parahs);