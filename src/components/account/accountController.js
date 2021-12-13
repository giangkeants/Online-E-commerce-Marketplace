const service = require('./accountService');

/**
 * Lay 1 tai khoan len bang id
 *
 * @param req request
 * @param res respone
 * @returns {Promise<void>}
 */
exports.get = async (req, res) => {
  try {
    // const account = await service.getById(req.params.id);
    // res.render('account/views/account_detail', {account});
    res.render('account/views/account_detail');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.paging = async (req, res) => {
  try {
    const accounts = await service.paging(req.query.page);
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

/**
 * Lay list tat ca tai khoan
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.getAll = async (req, res) => {
  try {
    const accounts = await service.getAll();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Them account moi vao database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.insert = async (req, res) => {
  try {
    const newAccount = await service.insert(req.body);
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va Update account da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedAccount = await service.update(req.params.id, req.body, req.file);
    res.redirect(`/account/${updatedAccount._id}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa tai khoan trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({message: `Account ${req.params.id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}