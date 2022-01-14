const cartService = require("../../../components/shopping/cart/cartService");
const model = require("../../../components/product/productModel");

/**
 * Thêm sp mới vào cart
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.insertProductToCart = async function (req, res) {
  try {
    const product = await model.findById(req.params.id).lean();
    let cart;
    if(!req.user){
      cart = await cartService.getCartByGuestId(req.session.guest_id);
      if(cart === null){
        cart = await cartService.insertCartGuest(req.session.guest_id);
      }
    } else {
      cart = await cartService.getCartByUserId(req.user._id);
      if (req.session.guest_id !== req.user._id) {
        const guestCart = await cartService.getCartByGuestId(req.session.guest_id);
        if(cart === null) {
          if(guestCart !== null) {
            if(guestCart.user_id === null) {
              cart = await cartService.synchronizeCart(req.user._id, guestCart);
              req.session.guest_id = req.user._id;
            } else {
              cart = await cartService.insertCartUser(req.user._id);
            }
          } else {
            cart = await cartService.insertCartUser(req.user._id);
            req.session.guest_id = req.user._id;
          }
        }
      } else {
        if(cart === null) {
          cart = await cartService.insertCartUser(req.user._id);
        }
      }
    }
    await cartService.addProductToCart(product, cart, req.body);
    res.status(201);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

