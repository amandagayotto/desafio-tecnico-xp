const ClientSchema = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define("Client", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
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