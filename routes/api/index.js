//import express.js router
const router = require('express').Router();
//import user-routes
const userRoutes = require('./user');
//import thought-routes
const thoughtRoutes = require('./thought');

//add prefix of '/users' to routes created in 'user.js'
router.use('/users', user);
//add prefix of '/thoughts' to routes created in 'thought.js'
router.use('/thoughts', thought)

//export routes
module.exports = router;