module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [{
        id: 1,
        name: 'Maria Santos',
        password: '1a2b43c',
      },
      {
        id: 2,
        name: 'João Martins',
        password: '4a5b6c',
      },
      {
        id: 3,
        name: 'Bruna da Silva',
        password: '7a8b9c',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};