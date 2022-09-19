module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Categorias',
    [
      {
        codigo: 'c1',
        titulo: 'Esportes',
        status: 1,
      },
      {
        codigo: 'c2',
        titulo: 'Roupas',
        status: 1,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Categorias', null, {}),
};