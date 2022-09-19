module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Produtos',
    [
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
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Produtos', null, {}),
};