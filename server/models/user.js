module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-z0-9\_\-]+$/i,
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.SlideShow, {
          foreignKey: 'userId',
          as: 'slideShows',
        });
      }
    }
  });
  return User;
};