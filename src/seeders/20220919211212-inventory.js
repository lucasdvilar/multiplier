module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Inventory',
    [
      {
        idProduto: 1,
        quantidade: 10,
        reserva: 2,
        status: 1,
      },
      {
        idProduto: 2,
        quantidade: 5,
        reserva: 1,
        status: 1,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Inventory', null, {}),
};