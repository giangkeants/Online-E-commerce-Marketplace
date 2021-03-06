const passport = require("../../config/passport");
const accountService = require('../account/accountService');

/**
 * Render trang Login
 * @param req request
 * @param res response
 */
exports.renderLogin = (req, res) => {
  const message = req.flash("failure_message");
  res.render("auth/views/login", message[0]);
}

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
}

exports.login = (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("failure_message", info);
      return res.redirect("/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    });
  })(req, res, next);
};

/**
 * Render trang register
 * @param req request
 * @param res response
 */
exports.renderRegister = (req, res) => {
  console.log(req.body);
  res.render('auth/views/register');
}

/**
 * Dang ky tai khoan
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.register = async (req, res) => {
  try {
    const { password } = req.body;
    const { confirmPassword } = req.body;
    if (password != confirmPassword) {
      res.render('auth/views/register', {
        message: 'Password does not match'
      });
    }
    else {
      try {
        const newAccount = await accountService.insert(req.body);
        if (!newAccount) {
          res.render('auth/views/register', {
            message: 'Username or Email already exist'
          });
        } else {
          res.redirect('/login');
        }
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }


}

