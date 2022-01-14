const commentModel = require("./commentModel");

/**
 * Phan trang comment, moi trang 5 comment
 * @param page
 * @param product_id
 * @returns {Promise<void>}
 */
exports.getComment = async (page, product_id) => {
  try {
    let perPage = 5; // so luong comment xuat hien trong 1 trang
    page = page || 1;
    return await commentModel
      .find({ product_id })
      .sort([["createdAt", "descending"]])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .lean();
  } catch (err) {
    throw err;
  }
};

/**
 * Them comment moi vao database
 * @returns {Promise<>}
 * @param user_id
 * @param user_avatar_url
 * @param user_name
 * @param product_id
 * @param content
 */
module.exports.postComment = async (
  user_id,
  user_avatar_url,
  user_name,
  product_id,
  content
) => {
  try {
    const comment = new commentModel({
      user_id: user_id,
      user_avatar_url: user_avatar_url,
      user_name: user_name,
      product_id: product_id,
      content: content,
    });
    return await comment.save();
  } catch (err) {
    throw err;
  }
};
