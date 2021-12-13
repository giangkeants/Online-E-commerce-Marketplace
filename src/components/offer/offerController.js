const service = require('./offerService');

exports.get = async (req, res) => {
  try {
    const offer = await service.get(req.params.id);
    res.json(offer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const offers = await service.getAll();
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const newOffer = service.insert(req.body);
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va Update offer da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedOffer = await service.update(req.params.id, req.body);
    res.json(updatedOffer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa offer trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({message: `Offer ${req.params.id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}