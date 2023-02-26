const User = require("../../models/user/user")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    try {

        console.log("req", req.body)
        const { email, password } = req.body

        let user = await User.findOne({ email })
        if (user) {

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const token = await createToken(email);
                res.status(200).send({ success: true, data: { user, token } })
            }

            else {
                res.status(400).send({ success: false, message: "Password does not match" })
            }
        }
        else {
            res.status(400).send({ success: false, message: "Invalid email provided!" })
        }

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

const register = async (req, res) => {
    try {

        let user = await User.find({ email: req.body.email })
        if (user.length === 0) {
            user = await User.create({ ...req.body })
            if (user) {
                res.status(200).send({ success: true, message: "Account created successfully" })
            }
        }
        else {
            res.status(400).send({ success: false, message: "User with this email already exists!" })
        }

    } catch (error) {
        console.log(error.message)
        res.status(400).send({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

async function createToken(email) {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
}

module.exports = {
    login,
    register,
    updateUser,
    deleteUser
}