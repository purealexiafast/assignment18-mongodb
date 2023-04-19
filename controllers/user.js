const { User, Thought } = require("../models")

const userController = {
    async getUsers(req, res) {
        try {
            const userData = await User.find()
            res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async createUser(req, res) {
        try {
            const savedData = await User.create(req.body)
            res.json(savedData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async getOneUser(req, res) {
        try {
            const oneUserData = await User.findOne({ _id: req.params.id }).populate("friends").populate("thoughts")
            res.json(oneUserData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = userController