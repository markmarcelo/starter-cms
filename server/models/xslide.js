module.exports = (sequelize, DataTypes) => {
  const Slide = sequelize.define('Slide', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Slide.belongsTo(models.Slideshow, {
          foreignKey: 'slideshowId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Slide;
};