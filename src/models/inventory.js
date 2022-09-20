module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idProduto: { type: DataTypes.INTEGER, foreignKey: true },
    quantidade: DataTypes.INTEGER,
    reserva: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
  });

  Inventory.associate = (models) => {
    Inventory.belongsTo(models.Product,
      { foreignKey: 'idProduto', as: 'products' });
  };

  return Inventory;
};