module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Slideshows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      theme: {
        type: Sequelize.STRING
      },
      fontHeading: {
        type: Sequelize.STRING
      },
      fontBody: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Slideshows'),
};