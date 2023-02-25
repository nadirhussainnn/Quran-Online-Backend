const express = require('express')
const { getAllParahs, getAllSurahs, getSurahByParah, getSurahById, insert_parahs } = require('../../controllers/quran')
const verifyToken = require('../../middlewares')
const quran_route = express()

quran_route.get("/all-parahs", verifyToken, getAllParahs)
quran_route.get("/all-surahs", verifyToken, getAllSurahs)
quran_route.get("/surahs-by-parah/:id", verifyToken, getSurahByParah)
quran_route.get("/surah-by-id/:id", verifyToken, getSurahById)

// Only accessible to admin
quran_route.post("/save-parahs", insert_parahs)

module.exports = {
    quran_route
}