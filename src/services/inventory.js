const { Inventory } = require('../models');

const getById = async (id) => {
  const inventory = await Inventory.findOne({ where: { idProduto: id } });
  return inventory;
};

const update = async (id, inventoryInfo) => {
  await Inventory.update(
    { ...inventoryInfo },
    { where: { idProduto: id } },
  );
};

module.exports = {
  getById,
  update,
};
