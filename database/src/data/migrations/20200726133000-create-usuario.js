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
        allowNull: false,
        defaultValue: 'robson'
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
      hora_fila: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'charmosa'
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
      estabelecimento_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'establishments',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
