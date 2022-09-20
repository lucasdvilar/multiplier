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

const products = [
  {
    idCategoria: 1,
    codigo: 'p1',
    nome: 'Bola',
    descricao: 'Bola de futebol',
    valor: 10.5,
    status: 1,
  },
  {
    idCategoria: 2,
    codigo: 'p2',
    nome: 'Camisa',
    descricao: 'Camisa branca',
    valor: 20.9,
    status: 1,
  },
];

const postProduct = {
  idCategoria: 2,
  codigo: 'p3',
  nome: 'Camisa',
  descricao: 'Camisa preta',
  valor: 30.9,
  status: 1,
};

const postProductWithId = {
  id: 3,
  idCategoria: 2,
  codigo: 'p3',
  nome: 'Camisa',
  descricao: 'Camisa preta',
  valor: 30.9,
  status: 1,
};

const patchProduct = {
  nome: 'Camiseta',
  valor: 30,
};

module.exports = {
  categories,
  postCategory,
  postCategoryWithId,
  patchCategory,
  products,
  postProduct,
  postProductWithId,
  patchProduct,
};
