const AccountSchema = (sequelize, DataTypes) => {
  const AccountTable = sequelize.define("Account", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    clientId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    balance: DataTypes.DECIMAL,
  }, { timestamps: false });

  AccountTable.associate = models => {
    AccountTable.hasOne(models.Client, {
      foreignKey: 'id',
      as: 'client'
    })
  };

  return AccountTable;
}

module.exports = AccountSchema;