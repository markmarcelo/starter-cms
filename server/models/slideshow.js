'use strict';
module.exports = function(sequelize, DataTypes) {
  var Slideshow = sequelize.define('Slideshow', {
    theme: DataTypes.STRING,
    fontHeading: DataTypes.STRING,
    fontBody: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Slideshow;
};