//import express.js router
const router = require('express').Router();
//import thought controllers
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought');

//set up GET and POST at /api/thoughts
router  
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

//set up PUT and GET at /api/thoughts/:id
router
    .route('/:id')
    .put(updateThought)
    .get(getThoughtById);
    
//set up DELETE at /api/thoughts/:userId/:thoughtId.  Also removes thoughts from User model thoughts array
router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);

//set up POST reaction at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

//set up DELETE reactions at /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


//export routes
module.exports = router;