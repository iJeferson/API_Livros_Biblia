'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livros_Biblia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livros_Biblia.init({
    nome: DataTypes.STRING,
    quantidade_capitulos: DataTypes.INTEGER,
    numero_versiculos: DataTypes.INTEGER,
    testamento: {
      type: DataTypes.ENUM('Velho', 'Novo'),
      allowNull: false,
    },
    temas_principais: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Livros_Biblia',
  });
  return Livros_Biblia;
};