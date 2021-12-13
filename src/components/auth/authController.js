const passport = require("../../config/passport");
const accountService = require('../account/accountService');

/**
 * Render trang Login
 * @param req request
 * @param res response
 */
exports.renderLogin = (req, res) => {
  const invalidAccount = req.query['invalid-account'] !== undefined;
  res.render('auth/views/login', { invalidAccount });
}

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
}

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
    if(password != confirmPassword){
      res.render('auth/views/register', {
        message: 'Xác nhận mật khẩu không đúng'
      });
    }
    else {
      try {
        const newAccount = await accountService.insert(req.body);
        if (!newAccount) {
          res.render('auth/views/register', {
            message: 'Username hoặc Email đã tồn tại'
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

