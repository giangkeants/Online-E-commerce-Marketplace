const model = require('./accountModel');
const bcrypt = require('bcrypt');
const cloudinary = require('../../config/cloudinary');

/**
 * Lay 1 account len tu database bang id
 * @param id {@link mongoose.Types.ObjectId}
 * @returns {Promise<*|{mess: string}>}
 */
module.exports.getById = async (id) => {
  try {
    const account = await model.findById(id).lean();
    if (account === null) {
      return { mess: `Account id '${id}' not found` };
    }
    return account;
  } catch (err) {
    throw err;
  }
};

/**
 * Lay 1 account len tu database bang username
 * @param username
 * @returns {Promise<*|{mess: string}>}
 */
module.exports.getByUsername = async (username) => {
  try {
    return await model.findOne({ username });
  } catch (err) {
    throw err;
  }
};

module.exports.validatePassword = async (user, password) => {
  return await bcrypt.compare(password, user.password);
}

/**
 * Phan trang cac account, moi trang 5 account
 * @param page
 * @returns {Promise<void>}
 */
exports.paging = async (page) => {
  try {
    let perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
    page = page || 1;

    return await model
      .find() // find tất cả các data
      .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage);
  } catch (err) {
    throw err;
  }
};

/**
 * Lay 1 list cac san pham tu database
 * @returns {Promise<[account: model]>}
 */
module.exports.getAll = async () => {
  try {
    return await model.find();
  } catch (err) {
    throw err;
  }
};

/**
 * Them san pham moi vao database
 * @param newAccount
 * @returns {Promise<string>}
 */
module.exports.insert = async ({ username, email, password }) => {
  try {
    const isExisted_username = await model.exists({ username });
    const isExisted_email = await model.exists({ email });
    if (isExisted_username || isExisted_email) {
      return null;
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const account = new model({ username, password: hashedPassword, email });
      return await account.save();
    }
  } catch (err) {
    throw err;
  }
}

/**
 * Cap nhat thong tin tai khoan co trong database
 *
 * @param id user's id
 * @param updateUser
 * @param filePath
 * @returns {Promise<{account: model}>}
 */
exports.update = async (id, updateUser, file) => {
  try {
    // Upload avatar len cloudinary
    let result;
    if (file) {
      result = await cloudinary.uploader.upload(
        file.path,
        {
          public_id: id,
          folder: 'user_avatar',
          use_filename: true
        });
    }

    /*
     Lay avatar url
     Neu khong co avatar duoc up len, url bo trong
    */
    const { url } = result ?? "";
    // Update user's info
    updateUser.avatar_url = url;
    return await model.findByIdAndUpdate(id, updateUser,
      { new: true });
  } catch (err) {
    throw err;
  }
}

/**
 * Tim tai khoan bang id xoa khoi database
 * @param id
 * @returns {Promise<*>}
 */
exports.delete = async (id) => {
  try {
    return await model.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}