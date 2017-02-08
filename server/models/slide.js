'use strict';
module.exports = function(sequelize, DataTypes) {
  var Slide = sequelize.define('Slide', {
    title: DataTypes.STRING,
    contentMiddle: DataTypes.STRING,
    contentTopLeft: DataTypes.STRING,
    contentTopRight: DataTypes.STRING,
    contentBottomLeft: DataTypes.STRING,
    contentBottomRight: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Slide;
};