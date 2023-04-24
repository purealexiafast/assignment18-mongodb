const router = require("express").Router()
const { getThoughts, getOneThought, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thought")

router.route("/").get(getThoughts).post(createThought)
router.route("/:id").get(getOneThought).put(updateThought).delete(deleteThought).post(addReaction)
router.route("/:id/delete/:reactionId").delete(deleteReaction)







module.exports = router