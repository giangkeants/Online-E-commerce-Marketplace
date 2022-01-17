const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const accountService = require('../components/account/accountService');

passport.use(new LocalStrategy(
  async (username, password, done) => {
    const user = await accountService.getByUsername(username);
    if (!user) {
      return done(null, false, { message: 'Incorrect username' })
    }
    if (!await accountService.validatePassword(user, password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

passport.serializeUser(function (user, done) {
  done(null, {
    _id: user._id,
    username: user.username,
    email: user.email,
    name: user.name,
    phone: user.phone,
    address: user.address,
    sex: user.sex,
    dob: user.dob,
    avatar_url: user.avatar_url
  });
});


passport.deserializeUser(async function (user, done) {
  //const user = await accountService.getByUsername(username);
  done(null, user);
});

module.exports = passport;