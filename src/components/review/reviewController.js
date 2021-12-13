const service = require('./reviewService');

exports.get = async (req, res) => {
  try {
    const review = await service.get(req.params.id);
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const reviews = await service.getAll();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const newReview = service.insert(req.body);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va Update review da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedReview = await service.update(req.params.id, req.body);
    res.json(updatedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa review trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({message: `Review ${req.params.id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}