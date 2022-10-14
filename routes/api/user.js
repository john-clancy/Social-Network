//import express.js router
const router = require('express').Router();
//import user controllers
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} =  require('../../controllers/user-controller');

//set up GET and POST at /api/users
router  
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//set up GET one PUT, and DELETE at /api/user/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//set up POST and DELETE at /api/user/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

//export routes
module.exports = router;