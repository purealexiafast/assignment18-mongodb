const { User, Thought } = require("../models")

const thoughtController = {
    async getThoughts(req, res) {
        try {
            const thoughtData = await Thought.find()
            res.json(thoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async createThought(req, res) {
        try {
            const savedThought = await Thought.create(req.body)
            res.json(savedThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async getOneThought(req, res) {
        try {
            const oneThoughtData = await Thought.findOne({ _id: req.params.id })
            res.json(oneThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateThought(req, res) {
        try {
            const updateThought = await Thought.findOneAndUpdate(
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
            res.json(updateThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {
            const deleteThought = await Thought.findOneAndDelete({ _id: req.params.id })
            res.json(deleteThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async addReaction(req, res) {
        const addedReaction = await Thought.findOneAndUpdate(
            {
                _id: req.params.id,

            },

            {
                $addToSet: {
                    reactions: req.body
                }
            },

            {
                runValidators: true,
                new: true
            }
        )
        res.json(addedReaction)
    }
}

module.exports = thoughtController