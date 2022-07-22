module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('BrokerAssets',
    [{
      id: 1,
      code: 'ALPA4',
      quantity: 1000.00,
      value: 20.85,
    },
    {
      id: 2,
      code: 'ELET3',
      quantity: 2000.00,
      value: 44.37,
    },
    {
      id: 3,
      code: 'VALE3',
      quantity: 1000.00,
      value: 67.39,
    },
    {
      id: 4,
      code: 'EMBR3',
      quantity: 2000.00,
      value: 12.15,
    },
    {
      id: 5,
      code: 'SULA11',
      quantity: 1000.00,
      value: 20.76,
    }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('BrokerAssets', null, {});
  },
};