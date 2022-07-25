const BrokerAssetSchema = (sequelize, DataTypes) => {
  const BrokerAssetTable = sequelize.define("BrokerAsset", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    code: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    value: DataTypes.DECIMAL(10, 2)
  }, { timestamps: false });

  BrokerAssetTable.associate = models => {
    BrokerAssetTable.hasOne(models.Operation, {
      foreignKey: 'assetId',
      as: 'operation'
    });
    BrokerAssetTable.hasOne(models.Account, {
      foreignKey: 'assetId',
      as: 'account'
    });
  };

  return BrokerAssetTable;
}

module.exports = BrokerAssetSchema;