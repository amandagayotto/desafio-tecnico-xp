module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Operations',
    [{
      id: 1,
      clientId: 2,
      assetId: 3,
      quantity: 10,
      buy: true,
      sale: false,
      createdAt: new Date('2011-08-01T19:58:00.000Z')
    },
    {
      id: 2,
      clientId: 3,
      assetId: 5,
      quantity: 100,
      buy: true,
      sale: false,
      createdAt: new Date('2011-08-01T19:58:00.000Z')
    },
    {
      id: 3,
      clientId: 1,
      assetId: 2,
      quantity: 8,
      buy: true,
      sale: false,
      createdAt: new Date('2011-08-01T19:58:00.000Z')
    },
    {
      id: 4,
      clientId: 2,
      assetId: 3,
      quantity: 5,
      buy: false,
      sale: true,
      createdAt: new Date('2012-08-01T19:58:00.000Z')
    },
    {
      id: 5,
      clientId: 3,
      assetId: 5,
      quantity: 10,
      buy: false,
      sale: true,
      createdAt: new Date('2013-08-01T19:58:00.000Z')
    },
    {
      id: 6,
      clientId: 1,
      assetId: 2,
      quantity: 2,
      buy: false,
      sale: true,
      createdAt: new Date('2011-12-01T19:58:00.000Z')
    },
    {
      id: 7,
      clientId: 2,
      assetId: 1,
      quantity: 10,
      buy: true,
      sale: false,
      createdAt: new Date('2012-05-12T19:58:00.000Z')
    }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Operations', null, {});
  },
};