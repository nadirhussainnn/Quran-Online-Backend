const express = require('express')
const { getAllParahs, getAllSurahs, getSurahByParah, getSurahById } = require('../../controllers/quran')
const quran_route = express()

quran_route.get("/all-parahs", getAllParahs)
quran_route.get("/all-surahs", getAllSurahs)
quran_route.get("/surahs-by-parah/:id", getSurahByParah)
quran_route.get("/surah-by-id/:id", getSurahById)

module.exports = {
    quran_route
}