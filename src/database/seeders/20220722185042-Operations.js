module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Operations',
    [{
      id: 1,
      clientId: 2,
      assetId: 3,
      quantity: 10,
      buy: true,
      sell: false,
      createdAt: new Date()
    },
    {
      id: 2,
      clientId: 3,
      assetId: 5,
      quantity: 100,
      buy: true,
      sell: false,
      createdAt: new Date()
    },
    {
      id: 3,
      clientId: 1,
      assetId: 2,
      quantity: 8,
      buy: true,
      sell: false,
      createdAt: new Date()
    },
    {
      id: 4,
      clientId: 2,
      assetId: 3,
      quantity: 5,
      buy: false,
      sell: true,
      createdAt: new Date()
    },
    {
      id: 5,
      clientId: 3,
      assetId: 5,
      quantity: 10,
      buy: false,
      sell: true,
      createdAt: new Date()
    },
    {
      id: 6,
      clientId: 1,
      assetId: 2,
      quantity: 2,
      buy: false,
      sell: true,
      createdAt: new Date()
    },
    {
      id: 7,
      clientId: 2,
      assetId: 1,
      quantity: 10,
      buy: true,
      sell: false,
      createdAt: new Date()
    }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Operations', null, {});
  },
};