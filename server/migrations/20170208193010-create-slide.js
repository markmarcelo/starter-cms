'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Slides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      contentMiddle: {
        type: Sequelize.STRING
      },
      contentTopLeft: {
        type: Sequelize.STRING
      },
      contentTopRight: {
        type: Sequelize.STRING
      },
      contentBottomLeft: {
        type: Sequelize.STRING
      },
      contentBottomRight: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Slides');
  }
};