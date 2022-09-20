const CategoryService = require('../services/category');

const getAll = async (_req, res) => {
  const categories = await CategoryService.getAll();
  res.status(200).json(categories);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const category = await CategoryService.getById(id);
  res.status(200).json(category);
};

const create = async (req, res) => {
  const category = await CategoryService.create(req.body);
  res.status(201).json(category);
};

const update = async (req, res) => {
  const { id } = req.params;
  await CategoryService.update(id, req.body);
  res.status(204).end();
};

const remove = async (req, res) => {
  const { id } = req.params;
  await CategoryService.remove(id);
  res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
