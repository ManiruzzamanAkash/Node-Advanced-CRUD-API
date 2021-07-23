
exports.validate = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Please give todo title !" });
        return;
    }

    if (!req.body.status) {
        res.status(400).send({ message: "Please give todo status !" });
        return;
    }
};