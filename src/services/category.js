const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) {
    const error = { status: 404, message: 'Not found.' };
    throw error;
  }
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
  if (category === 0) {
    const error = { status: 404, message: 'Not found.' };
    throw error;
  }
};

const remove = async (id) => {
  const category = await Category.destroy({ where: { id } });
  if (category === 0) {
    const error = { status: 404, message: 'Not found.' };
    throw error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
