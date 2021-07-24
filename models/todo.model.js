const mongoose   = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: {
        type    : String,
        required: [true, 'Please give todo title !']
    },
    status: {
        type    : String,
        enum    : { values: ['Pending', 'Done'], message: 'Todo Status is not correct !' },
        default : 'Pending',
        required: [true, 'Please give todo status']
    },
    description: {
        type    : String,
        required: false,
        min     : [5, 'Please give minimum 5 characters for todo description !']
    }
});

module.exports = mongoose => {
    const Todo = mongoose.model(
        "Todo",
        mongoose.Schema(
            todoSchema,
            { timestamps: true }
        )
    );

    return Todo;
};