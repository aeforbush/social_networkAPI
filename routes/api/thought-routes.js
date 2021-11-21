const router = require('express').Router();

const {
    getAllThought,
    addThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReactionById



} = require('../../controllers/thought-controller');

// CRUD routes for api/thoughts
router
.get(getAllThought)
.post(addThought)

// CRUD routes for api/thoughts/:id
router
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// CRUD routes for api/thoughts/:thoughtId/reactions
router
.post(createReaction)
.delete(deleteReactionById)

