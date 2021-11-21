const router = require('express').Router();

// destructure the method names out of the controller object and use those names 
const {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addNewFriend,
    deleteFriend

} = require('../../controllers/user-controller');

// set up GET, POST, PUT and DELETE at api/users 
router
.route('/')
.get(getAllUser)
.post(addUser);


// CRUD routes for api/users/:userId
router
.get(getUserById)
.put(updateUser)
.deleteUser(deleteUser);
// bonus remove user's associated thoughts when deleted

// CRUD routes for api/users/:userId/friends/:friendId
router
.post(addNewFriend)
.delete(deleteFriend)

module.exports = router;

