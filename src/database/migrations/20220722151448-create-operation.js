'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Operations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      assetId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BrokerAssets',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      buy: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      sale: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Operations');
  }
};