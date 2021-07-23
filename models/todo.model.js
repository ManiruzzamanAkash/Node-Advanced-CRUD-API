module.exports = mongoose => {
    const Todo = mongoose.model(
        "Todo",
        mongoose.Schema(
            {
                title : String,
                status: String
            },
            { timestamps: true }
        )
    );

    return Todo;
};