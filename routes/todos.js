const express = require('express');
const router  = express.Router();

const todo    = require("../controllers/todo.controller");

// Create a new Todo
router.post("/", todo.create);

// Retrieve all todo list
router.get("/", todo.findAll);

// Retrieve a single Todo with id
router.get("/:id", todo.findOne);

// Update a Todo with id
router.put("/:id", todo.update);

// Delete a Todo with id
router.delete("/:id", todo.delete);

// Create a new Todo
router.delete("/", todo.deleteAll);

module.exports = router;