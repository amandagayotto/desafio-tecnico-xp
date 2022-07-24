const ClientSchema = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define("Client", {
    clientId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: DataTypes.DECIMAL(10, 2)
  }, { timestamps: false });

  ClientTable.associate = models => {
    ClientTable.hasOne(models.Account, {
      foreignKey: 'clientId',
      as: 'account'
    });
    ClientTable.hasOne(models.Operation, {
      foreignKey: 'clientId',
      as: 'operation'
    });
  };

  return ClientTable;
}

module.exports = ClientSchema;