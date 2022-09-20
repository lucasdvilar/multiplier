const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

const create = async (categoryInfo) => {
  const category = await Category.create({ ...categoryInfo });
  return category;
};

const update = async (id, categoryInfo) => {
  await Category.update(
    { ...categoryInfo },
    { where: { id } },
  );
};

const remove = async (id) => {
  await Category.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
