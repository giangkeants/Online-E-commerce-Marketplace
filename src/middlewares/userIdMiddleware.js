const faker = require('faker');
module.exports = (req, res, next) => {
  if(!req.session.guest_id){
    req.session.guest_id = faker.internet.password();
  }
  next();
};