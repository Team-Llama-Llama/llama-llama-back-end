// Middleware for protectec routes
function authRequired(req, res, next) {
  if (req.session && req.session.user) {
    // Active session
    return next();
  } else {
    // Didn't have a session
    return res.status(401).json({ error: "Not authorized" });
  }
}

module.exports = authRequired;
