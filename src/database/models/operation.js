const OperationSchema = (sequelize, DataTypes) => {
  const OperationTable = sequelize.define("Operation", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    clientId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    assetId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    quantity: DataTypes.INTEGER,
    buy: DataTypes.BOOLEAN,
    sell: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
  }, { timestamps: false });

  OperationTable.associate = models => {
    OperationTable.hasOne(models.Client, {
      foreignKey: 'clientId',
      as: 'client'
    });
    OperationTable.hasOne(models.BrokerAsset, {
      foreignKey: 'id',
      as: 'asset'
    });
  };

  return OperationTable;
}

module.exports = OperationSchema;