const AccountSchema = (sequelize, DataTypes) => {
  const AccountTable = sequelize.define("Account", {
    clientId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    assetId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  }, { timestamps: false });

  AccountTable.associate = models => {
    AccountTable.hasOne(models.Client, {
      foreignKey: 'clientId',
      as: 'client'
    });
    AccountTable.hasOne(models.BrokerAsset, {
      foreignKey: 'id',
      as: 'asset'
    });
  };

  return AccountTable;
}

module.exports = AccountSchema;