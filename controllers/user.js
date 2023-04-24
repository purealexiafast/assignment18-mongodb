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
    },

    async updateUser(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                {
                    _id: req.params.id
                },

                {
                    $set: req.body
                },

                {
                    runValidators: true,
                    new: true
                }
            )
            res.json(updateUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete({ _id: req.params.id })
            res.json(deleteUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async addFriend(req, res) {
        try {
            const addedFriend = await User.findOneAndUpdate(
                {
                    _id: req.params.id

                },

                {
                    $addToSet: {
                        friends: req.params.friendId
                    }
                },

                {
                    runValidators: true,
                    new: true
                }
            )
            res.json(addedFriend)


        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteFriend(req, res) {
        try {
            const deletedFriend = await User.findOneAndUpdate(
                {
                    _id: req.params.id
                },

                {
                    $pull: {
                        friends: req.params.friendId
                    }
                },

                {
                    runValidators: true,
                    new: true
                }
            )
            res.json(deletedFriend)


        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = userController