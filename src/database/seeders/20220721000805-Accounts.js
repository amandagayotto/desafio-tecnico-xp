module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Accounts',
    [{
      id: 1,
      clientId: 1,
      balance: 5000.00,
    },
    {
      id: 2,
      clientId: 3,
      balance: 18000.00,
    },
    {
      id: 3,
      clientId: 2,
      balance: 7500.00,
    }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};

