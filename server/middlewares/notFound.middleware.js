const notFound = (req, res, next) => {
    res.status(404).json({"message": "Sorry, this page does not exist on our server."});
};

module.exports = notFound;