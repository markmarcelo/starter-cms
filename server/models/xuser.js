module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    password: {
      type: Sequelize.STRING,
    },
    salt: {
      type: Sequelize.STRING
    }
  }, {
    classMethods: {
      associate: (models) => {
        Todo.hasMany(models.SlideShow, {
          foreignKey: 'userId',
          as: 'slideShows',
        });
      },
    },
  });
  return User;
};