module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Accounts',
    [{
      clientId: 1,
      assetId: 2,
      quantity:6
    },
    {
      clientId: 2,
      assetId: 3,
      quantity:5
    },
    {
      clientId: 2,
      assetId: 1,
      quantity:10
    },
    {
      clientId: 3,
      assetId: 5,
      quantity:90
    }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};

