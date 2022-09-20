const InventoryService = require('../services/inventory');

const getById = async (req, res) => {
  const { id } = req.params;
  const inventory = await InventoryService.getById(id);
  res.status(200).json(inventory);
};

const update = async (req, res) => {
  const { id } = req.params;
  await InventoryService.update(id, req.body);
  res.status(204).end();
};

const remove = async (_req, res) => {
  res.status(501).end();
};

module.exports = {
  getById,
  update,
  remove,
};
