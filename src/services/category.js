const { Category } = require('../models');
const errors = require('../utils/errors');

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) throw errors.NOT_FOUND;
  return category;
};

const create = async (categoryInfo) => {
  const category = await Category.create({ ...categoryInfo });
  return category;
};

const update = async (id, categoryInfo) => {
  const [category] = await Category.update(
    { ...categoryInfo },
    { where: { id } },
  );
  if (category === 0) throw errors.NOT_FOUND;
};

const remove = async (id) => {
  const category = await Category.destroy({ where: { id } });
  if (category === 0) throw errors.NOT_FOUND;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
