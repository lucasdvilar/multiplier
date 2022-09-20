const categories = [
  {
      id: 1,
      codigo: 'c1',
      titulo: 'Esportes',
      status: true,
  },
  {
      id: 2,
      codigo: 'c2',
      titulo: 'Roupas',
      status: true,
  },
];

const category1 = {
  id: 1,
  codigo: 'c1',
  titulo: 'Esportes',
  status: true,
};

const postCategory = {
  codigo: 'c3',
  titulo: 'Auto',
  status: true,
};

const postCategoryWithId = {
  id: 3,
  codigo: 'c3',
  titulo: 'Auto',
  status: true,
};

const patchCategory = {
  titulo: 'Tecnologia',
  status: false,
};

module.exports = {
  categories,
  category1,
  postCategory,
  postCategoryWithId,
  patchCategory,
};
