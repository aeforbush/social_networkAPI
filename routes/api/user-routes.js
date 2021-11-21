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

// set up GET all, and POST at /api/users 
router
.route('/')
.get(getAllUser)
.post(addUser);


// set up GET one, PUT, and DELETE at /api/users/:userId
router('/:userId')
.get(getUserById)
.put(updateUser)
.deleteUser(deleteUser);
// bonus remove user's associated thoughts when deleted

// set up ADD and DELETE a friend at /api/users/:userId/friends/:friendId
router('/:userId/friends/:friendId')
.post(addNewFriend)
.delete(deleteFriend)

module.exports = router;

