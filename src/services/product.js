const { Product } = require('../models');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const create = async (productInfo) => {
  const product = await Product.create({ ...productInfo });
  return product;
};

const update = async (id, productInfo) => {
  await Product.update(
    { ...productInfo },
    { where: { id } },
  );
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
