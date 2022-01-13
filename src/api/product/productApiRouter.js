const express = require("express");
const router = express.Router();

const controller = require("./productApiController");

router.get("/sorting", controller.sortingProducts);
router.get("/search-by-name", controller.getByName);
router.get("/", controller.filterProducts);

module.exports = router;
