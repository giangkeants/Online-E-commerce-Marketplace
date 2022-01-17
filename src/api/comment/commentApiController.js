const commentService = require("../../components/comment/commentService");
const productService = require("../../components/product/productService");

exports.getCommentById = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // trang thu n
        const comments = await commentService.getComment(page, req.params.id);

        const results = {};
        results.curr = page;
        const startIdx = (page - 1) * 5;
        if (comments.length >= 5) {
            results.next = page + 1;
        } else {
            results.curr = page;
            results.next = results.curr + 1;
            results.prev = results.curr - 1;
        }

        if (startIdx > 0) {
            results.prev = page - 1;
        } else {
            results.prev = 1;
            results.curr = 2;
            results.next = 3;
        }
        results.comments = comments;

        // res.json(product);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
/**
 * Them comment moi vao database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.postComment = async (req, res) => {
    try {
        if (!req.user) {
            res.status(401).json({
                message: 'Unauthorized'
            });
            return;
        }
        const { _id: user_id } = req.user;
        const { avatar_url: user_avatar_url } = req.user;
        const { username: user_name } = req.user;
        const { content } = req.body;
        const newComment = await commentService.postComment(user_id, user_avatar_url, user_name, req.params.id, content);
        res.status(201).json(newComment);
    } catch (err) {
        res.status(402).json({ message: err.message });
    }
}
