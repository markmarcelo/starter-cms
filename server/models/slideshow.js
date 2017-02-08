module.exports = (sequelize, DataTypes) => {
  var Slideshow = sequelize.define('Slideshow', {
    theme: DataTypes.STRING,
    fontHeading: DataTypes.STRING,
    fontBody: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Slideshow.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
        Slideshow.hasMany(models.Slide, {
          foreignKey: 'slideshowId',
          as: 'slides',
        });
      }
    }
  });
  return Slideshow;
};