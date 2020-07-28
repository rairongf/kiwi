'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_cadastro: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      horaFila: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estabelecimento_idEstabelecimento: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
