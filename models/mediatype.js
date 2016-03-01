'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MediaType', {//name of model
    MediaTypeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: DataTypes.STRING
  }, {
    tableName: 'MediaType', //if you don't specify, it will make it 'MediaTypes'
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
};
