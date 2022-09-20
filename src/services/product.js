const Sequelize = require('sequelize');
const config = require('../config/config');
const { Product, Inventory } = require('../models');

const sequelize = new Sequelize(config[process.env.NODE_ENV]);

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const create = async (productInfo) => {
  const t = await sequelize.transaction();
  try {
    const product = await Product.create(productInfo, { transaction: t });
    const inventory = {
      idProduto: product.id,
      quantidade: 0,
      reserva: 0,
      status: productInfo.status,
    };
    await Inventory.create(inventory, { transaction: t });
    await t.commit();
    return product;
  } catch (e) {
    await t.rollback();
    throw e;
  }
};

const update = async (id, productInfo) => {
  await Product.update(productInfo, { where: { id } });
};

const remove = async (id) => {
  await Product.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
