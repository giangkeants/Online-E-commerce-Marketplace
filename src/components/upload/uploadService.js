const model = require('../product/productModel');
<<<<<<< HEAD
const cloudinary = require("../../config/cloudinary")
=======
const cloudinary = require('../../config/cloudinary');
>>>>>>> 254d9b57b29fe3e523bd5eb21e53857004ec353f

/**
 * Lay 1 product bang id <br>
 * Nho them await vao truoc ham tra ve neu khong ham tra ve Promise
 *
 * @param id
 * @returns {Promise<{product: model}|{mess: string}>}
 */
exports.get = async (id) => {
    try {
        const product = await model.findById(id);
        if (product === null) {
            return {mess: `Product id '${id}' not found`};
        }
        return product;
    } catch (err) {
        throw err;
    }
};

/**
 * Phan trang cac product, moi trang co toi da 5 product
 * @param page
 * @returns {Promise<void>}
 */
exports.paging = async (page) => {
    try {
        let perPage = 9; // số lượng sản phẩm xuất hiện trên 1 page
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
 * Lay list cac san pham <br>
 * Nho them await vao truoc ham tra ve neu khong ham tra ve Promise
 *
 * @returns {Promise<[{product: model}]>}
 */
exports.getAll = async () => {
    try {
        return await model.find();
    } catch (err) {
        throw err;
    }
};

/**
 * Them san pham moi vao database va tra ve ket qua san pham da them <br>
 * Nho them await vao truoc ham tra ve neu khong ham tra ve Promise
 *
<<<<<<< HEAD
 * @param newProduct
 * @param images
=======
>>>>>>> 254d9b57b29fe3e523bd5eb21e53857004ec353f
 * @returns {Promise<{product: model}>}
 * @param newProduct
 * @param image
 */
<<<<<<< HEAD
exports.insert = async (newProduct, images) => {
  try {
  let newProduct;
=======
exports.insert = async (newProduct, image) => {
    //let { discount, offer } = newProduct;
    //discount = parseFloat(discount.split(':')[1].trim());
>>>>>>> 254d9b57b29fe3e523bd5eb21e53857004ec353f

    //newProduct.discount = { rate: discount };
    //newProduct.offer = { content: offer };
    const product = new model(newProduct);
    const addedProduct = await product.save();

<<<<<<< HEAD
  //newProduct.discount = { rate: discount };
  //newProduct.offer = { content: offer };
  
    const product = new model(newProduct);
    const addedProduct = await product.save();

    const id = addedProduct._id;
    const folderName = `product_image/${newProduct.name}`;
=======
    const id = addedProduct._id;
    const folderName = `product_image/${newProduct.name}`;
    await cloudinary.uploader.upload(image.path, {
                public_id: id,
                folder: folderName,
                use_filename: true,
            });

    await model
        .findByIdAndUpdate(id, { image_url: folderName }, { new: true })
        .lean();

    try {
        return await product.save();
    } catch (err) {
        throw err;
    }
}
>>>>>>> 254d9b57b29fe3e523bd5eb21e53857004ec353f

    // Upload images
    for (let i = 0; i < images.length; i++) {
      if (images[i]) {
        await cloudinary.uploader.upload(images[i].path, {
          public_id: `${id}_${i}`,
          folder: folderName,
          use_filename: true,
        });
      }
    }
    
    /*
     Lay image url
     Neu khong co avatar duoc up len, url bo trong
    */
     await model
     .findByIdAndUpdate(id, { image_url: folderName }, { new: true })
     .lean();
} catch (err) {
 throw err;
}
}
/**
 * Tim san pham bang id, update thong tin san pham ton tai trong database
 *
 * @param id
 * @param updateProduct
 * @returns {Promise<{product: model}>}
 */
exports.update = async (id, updateProduct) => {
    try {
        //let { discount, offer } = updateProduct;

        //discount = parseFloat(discount.split(':')[1].trim());

        //updateProduct.discount = { rate: discount };
        //updateProduct.offer = { content: offer };

        return await model.findByIdAndUpdate(id, updateProduct,
            {new: true});
    } catch (err) {
        throw err;
    }
}

/**
 * Xoa san pham dang co trong database bang id
 *
 * @param id
 * @returns {Promise<{product: model}>}
 */
exports.delete = async (id) => {
    try {
        return await model.findByIdAndDelete(id);
    } catch (err) {
        throw err;
    }
}
