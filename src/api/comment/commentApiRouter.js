const express = require('express');
const router = express.Router();
const commentApiController = require("./commentApiController");

// GET
router.get("/:id/comments", commentApiController.getCommentById);
// POST Method
router.post('/:id/comments', commentApiController.postComment);


module.exports = router;