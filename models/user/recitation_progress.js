const mongoose = require("mongoose");

const recitedSurahsSchema=mongoose.Schema({
    surahNumber: {
        type: Number,
        default: 0,
        required:true,
    },
    surahName: {
        type: String,
        default: "NONE",
        required:true,
      },
},)

const recitedParahsSchema=mongoose.Schema({
    parahNumber: {
        type: Number,
        default: 0,
        required:true,
    },
    parahName: {
        type: String,
        default: "NONE",
        required:true,
      },
},)

const RecitationProgress = mongoose.Schema({
  user: {     //Recited By
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  recitedSurahs:[recitedSurahsSchema],
  recitedParahs:[recitedParahsSchema],
  surahLastRead: {
    verseNumber: {
      type: Number,
      default: 0,
    },
    surahNumber: {
      type: Number,
      default: 0,
    },
  },
  parahLastRead: {
    verseNumber: {
      default: 0,
      type: Number,
    },
    surahNumber: {
      type: Number,
      default: 0,
    },
    parahNumber: {
      type: Number,
      default: 0,
    },
  },
},{timestamp:true});


module.exports = mongoose.model("RecitationProgress", RecitationProgress);
