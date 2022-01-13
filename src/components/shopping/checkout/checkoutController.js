const service = require('./checkoutService');
const cartService = require("../cart/cartService");
const accountService = require("../../account/accountService");

exports.insert = async (req, res) => {
  try {
    if(!req.user) {
      res.redirect('/login');
    } else {
      const cart = await cartService.getCartByUserId(req.user._id)
      if (cart === null || cart.products.length === 0) {
        res.redirect('/products');
      } else {
        let checkout = await service.getByUserId(req.user._id);
        if (checkout) {
          checkout = await service.updateCart(cart, checkout);
        } else {
          const customer = await accountService.getById(req.user._id);
          checkout = await service.insert(req.user._id, cart, customer);
        }
        res.render('shopping/checkout/views/checkout', {checkout});
      }
    }
  } catch (err) {
    res.stats(400).json({ message: err.message });
  }
}

/**
 * Tim va Update checkout da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedCheckout = await service.update(req.params.id, req.body);
    res.json(updatedCheckout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa checkout trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({message: `Order ${req.params.id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}