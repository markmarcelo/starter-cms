module.exports = (sequelize, DataTypes) => {
  var Slide = sequelize.define('Slide', {
    title: DataTypes.STRING,
    contentMiddle: DataTypes.STRING,
    contentTopLeft: DataTypes.STRING,
    contentTopRight: DataTypes.STRING,
    contentBottomLeft: DataTypes.STRING,
    contentBottomRight: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Slide.belongsTo(models.Slideshow, {
          foreignKey: 'slideshowId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Slide;
};