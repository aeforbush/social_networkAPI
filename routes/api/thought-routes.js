const router = require('express').Router();

const {
    getAllThought,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReactionById



} = require('../../controllers/thought-controller');

// CRUD routes for api/thoughts
router
.get(getAllThought)
.post(createThought)

// CRUD routes for api/thoughts/:id
router
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// CRUD routes for api/thoughts/:thoughtId/reactions
router
.post(createReaction)
.delete(deleteReactionById)

