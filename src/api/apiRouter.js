const express = require("express");
const router = express.Router();

const commentApiRouter = require("./comment/commentApiRouter");
const productApiRouter = require("./product/productApiRouter");
const cartApiRouter = require("./shopping/cart/cartApiRouter");

router.use("/products", commentApiRouter);
router.use("/products", productApiRouter);
router.use("/cart", cartApiRouter);

module.exports = router;