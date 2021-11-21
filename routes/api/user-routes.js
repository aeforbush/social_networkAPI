const router = require("express").Router();

// destructure the method names out of the controller object and use those names
const {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// set up GET all, and POST at /api/users
router.route("/").get(getAllUser).post(addUser);

// set up GET one, PUT, and DELETE at /api/users/:userId
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
// bonus remove user's associated thoughts when deleted

// set up ADD and DELETE a friend at /api/users/:userId/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
