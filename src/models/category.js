module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    codigo: DataTypes.STRING,
    titulo: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
    underscored: true,
  });

  Category.associate = (models) => {
    Category.hasMany(models.Product,
      { foreignKey: 'idCategoria', as: 'products' });
  };

  return Category;
};