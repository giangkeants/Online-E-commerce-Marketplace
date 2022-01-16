const cartService = require('../components/shopping/cart/cartService');

module.exports = async (req, res, next) => {
    if (!req.user)
        res.locals.cartSize = 0;
    else
        res.locals.cartSize = await cartService.getCartSize(req.user._id);
    next();
};