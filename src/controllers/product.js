const ProductService = require('../services/product');

const getAll = async (_req, res) => {
  const products = await ProductService.getAll();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await ProductService.getById(id);
  res.status(200).json(product);
};

const create = async (req, res) => {
  const product = await ProductService.create(req.body);
  res.status(201).json(product);
};

const update = async (req, res) => {
  const { id } = req.params;
  await ProductService.update(id, req.body);
  res.status(204).end();
};

const remove = async (req, res) => {
  const { id } = req.params;
  await ProductService.remove(id);
  res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
