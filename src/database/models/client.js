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

  return ClientTable;
}

module.exports = ClientSchema;