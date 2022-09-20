const { Inventory } = require('../models');

const getById = async (id) => {
  const inventory = await Inventory.findOne({ where: { idProduto: id } });
  if (!inventory) {
    const error = { status: 404, message: 'Not found.' };
    throw error;
  }
  return inventory;
};

const update = async (id, inventoryInfo) => {
  const [inventory] = await Inventory.update(
    { ...inventoryInfo },
    { where: { idProduto: id } },
  );
  if (inventory === 0) {
    const error = { status: 404, message: 'Not found.' };
    throw error;
  }
};

module.exports = {
  getById,
  update,
};
