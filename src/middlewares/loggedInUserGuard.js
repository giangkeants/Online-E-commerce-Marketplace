module.exports = function loggedInUserGuard (req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
};