/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idCategoria: { type: DataTypes.STRING, foreignKey: true },
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    status: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
    underscored: true,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category,
      { foreignKey: 'idCategoria', as: 'categories' });
    Product.hasOne(models.Inventory,
      { foreignKey: 'idProduto', as: 'inventories' });
  };

  return Product;
};