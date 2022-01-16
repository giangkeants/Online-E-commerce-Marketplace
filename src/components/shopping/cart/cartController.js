const cartService = require("./cartService");

/**
 * Lấy giỏ hàng của các tài khoản chưa đăng nhập
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.getCart = async function (req, res) {
  try {
    let cart;
    if(!req.user){
      cart = await cartService.getCartByGuestId(req.session.guest_id);
    } else {
      cart = await cartService.getCartByUserId(req.user._id);
      if (req.session.guest_id !== req.user._id){
        const guestCart = await cartService.getCartByGuestId(req.session.guest_id);
        if(cart === null) {
          if(guestCart !== null) {
            if(guestCart.user_id === null) {
              cart = await cartService.synchronizeCart(req.user._id, guestCart);
              req.session.guest_id = req.user._id;
            }
          } else {
            req.session.guest_id = req.user._id;
          }
        } else {
          if(guestCart !== null) {
            if(guestCart.user_id === null) {
              await cartService.removeCart(guestCart);
              req.session.guest_id = req.user._id;
            }
          } else {
            req.session.guest_id = req.user._id;
          }

        }
      }
    }

    res.render('shopping/cart/views/cart', {cart});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * delete one product
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteProduct = async function (req, res) {
  try {
    let cart;
    if(!req.user){
      cart = await cartService.getCartByGuestId(req.session.guest_id);
    } else {
      cart = await cartService.getCartByUserId(req.user._id);
    }
    await cartService.deleteProduct(cart, req.params.id)
    res.redirect('/cart');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * delete all product
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteAllProduct = async function (req, res) {
  try {
    let cart;
    if(!req.user){
      cart = await cartService.getCartByGuestId(req.session.guest_id);
    } else {
      cart = await cartService.getCartByUserId(req.user._id);
    }
    if(cart === null){
      res.redirect('/products')
    } else {
      await cartService.updateCart(cart)
    }
    res.redirect('/cart');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};