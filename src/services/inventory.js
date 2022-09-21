const { Inventory } = require('../models');
const errors = require('../utils/errors');

const getById = async (id) => {
  const inventory = await Inventory.findOne({ where: { idProduto: id } });
  if (!inventory) throw errors.NOT_FOUND;
  return inventory;
};

const update = async (id, inventoryInfo) => {
  const [inventory] = await Inventory.update(
    { ...inventoryInfo },
    { where: { idProduto: id } },
  );
  if (inventory === 0) throw errors.NOT_FOUND;
};

module.exports = {
  getById,
  update,
};
