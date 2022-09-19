module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    codigo: DataTypes.STRING,
    titulo: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
    underscored: true,
  });

  Inventory.associate = (models) => {
    Inventory.belongsTo(models.Product,
      { foreignKey: 'idProduto', as: 'products' });
  };

  return Inventory;
};