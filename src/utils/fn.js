function notImplemented(req, res) {
  res.status(501).send({ message: "Route not implemented" });
}

module.exports = { notImplemented };
