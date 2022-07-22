const BrokerAssetSchema = (sequelize, DataTypes) => {
  const BrokerAssetTable = sequelize.define("BrokerAsset", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    code: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    value: DataTypes.DECIMAL,
  }, { timestamps: false });

  return BrokerAssetTable;
}

module.exports = BrokerAssetSchema;