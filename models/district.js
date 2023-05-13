"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      District.belongsTo(models.State, {
        foreignKey: "districtState",
        targetKey: "stateName",
      });
    }
  }
  District.init(
    {
      districtName: DataTypes.STRING,
      districtState: DataTypes.STRING,
      districtCountry: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "District",
    }
  );
  return District;
};
