const db      = require("../models");
const request = require("./requests/todo.request");
const Todo    = db.todos;

/**
 * Create new Todo
 * 
 * @param {object} req 
 * @param {object} res 
 * 
 * @return {object} JSON response
 */
exports.create = (req, res) => {
    request.validate(req, res);

    const todo = new Todo({
        title : req.body.title,
        status: req.body.status
    });

    todo.save(todo)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

/**
 * Get all Todo List
 * 
 * @param {object} req 
 * @param {object} res 
 * 
 * @return {object} JSON response
 */
exports.findAll = (req, res) => {
    Todo.find({})
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving todos."
            });
        });
};

/**
 * Get Single Todo
 * 
 * @param {object} req 
 * @param {object} res 
 * 
 * @return {object} JSON response
 */
exports.findOne = (req, res) => {
    const id = req.params.id;

    Todo.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Todo with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving Todo with id=" + id });
        });
};

/**
 * Update Todo By ID
 * 
 * @param {object} req 
 * @param {object} res 
 * 
 * @return {object} JSON response
 */
exports.update = (req, res) => {
    request.validate(req, res);

    const id = req.params.id;

    Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Todo with id=${id}. Todo Not found !`
                });
            } else {
                res.send({ message: "Todo has been updated successfully !", data: data });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Todo with id=" + id
            });
        });
};

/**
 * Delete Todo By ID
 * 
 * @param {object} req 
 * @param {object} res 
 * 
 * @return {object} JSON response
 */
exports.delete = (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Todo with id=${id}. Todo Not found !`
                });
            } else {
                res.send({
                    message: "Todo has been deleted successfully !", data: data
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Todo with id=" + id
            });
        });
};

/**
 * Delete all Todos
 * 
 * @param {object} req 
 * @param {object} res 
 * 
 * @return {object} JSON response
 */
exports.deleteAll = (req, res) => {
    Todo.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Todos have been deleted successfully !`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Todos !"
            });
        });
};