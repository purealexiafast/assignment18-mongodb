const router = require("express").Router()
const { getUsers, createUser, getOneUser, updateUser, deleteUser, deleteFriend, addFriend } = require("../../controllers/user")


router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser)
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend)









module.exports = router