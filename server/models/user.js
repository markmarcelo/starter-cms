const bcrypt = require('bcrypt-nodejs');

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
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Slideshow, {
          foreignKey: 'userId',
          as: 'slideshows',
        });
      },
    },
  }, {
    instanceMethods: {
      generateHash: (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(), null),
      validatePassword: (password) => bcrypt.compareSync(password, this.password),
    }
  });

  // Encrypt password before saving to database
  User.hook('beforeCreate', (user, options) => {
    user.password = user.generateHash(user.password);
  });

  return User;
};