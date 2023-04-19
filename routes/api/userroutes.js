const router = require("express").Router()
const { getUsers, createUser, getOneUser } = require("../../controllers/user")

router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getOneUser)







module.exports = router