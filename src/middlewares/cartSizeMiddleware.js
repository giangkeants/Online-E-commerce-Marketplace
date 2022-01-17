const cartService = require('../components/shopping/cart/cartService');

module.exports = async (req, res, next) => {
    if(!req.user)
        res.locals.cartSize = await cartService.getGuestCartSize(req.session.guest_id);
    else
        res.locals.cartSize = await cartService.getUserCartSize(req.user._id);
    next();
};