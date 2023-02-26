const Parahs = require("../../models/quran/parahs")
const { parahs_data } = require("../../utils/constants")

const getAllParahs = async (req, res) => {
  try {
    let data=await Parahs.find({})
    res.status(200).send({data})
  } catch (error) {
    res.status(400).send({ success: false, message: error.message })
  }
}

const getAllSurahs = async (req, res) => {
  try {

  } catch (error) {
    res.status(400).send({ success: false, message: error.message })
  }
}

const getSurahByParah = async (req, res) => {
  try {

  } catch (error) {
    res.status(400).send({ success: false, message: error.message })
  }
}

const getSurahById = async (req, res) => {
  try {

  } catch (error) {
    res.status(400).send({ success: false, message: error.message })
  }
}

// only available to admin
const insert_parahs = async (req, res) => {
  try {
    let data = new Parahs({
      parahs:parahs_data
    })

    await data.save()
    res.status(200).send("Saved")
  } catch (error) {
    res.status(400).send({ success: false, message: error.message })
  }
}

module.exports = {
  getAllParahs,
  getAllSurahs,
  getSurahByParah,
  getSurahById,
  insert_parahs
}