module.exports = (sequelize, DataTypes) => {
  const Slideshow = sequelize.define('Slideshow', {
    theme: {
      type: DataTypes.STRING,
    },
    fontHeading: {
      type: DataTypes.STRING,
    },
    fontBody: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Slideshow.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        }).hasMany(models.Slides, {
          foreignKey: 'slideshowId',
          as: 'slides',
        });
      },
    },
  });
  return Slideshow;
};