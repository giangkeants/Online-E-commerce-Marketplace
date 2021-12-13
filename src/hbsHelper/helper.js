const hbs = require("hbs");

hbs.registerHelper('is_equals', function (x, y) {
  return x === y;
});

module.exports = hbs;