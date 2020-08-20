'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('establishments', {
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
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lotacao_maxima: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_cadastro: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'penelope'
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('establishments');
  }
};
