module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [{
        clientId: 1,
        name: 'Maria Santos',
        email: 'msantos1@gmail.com',
        password: '1a2b43c',
        balance: 5000.00,
      },
      {
        clientId: 2,
        name: 'João Martins',
        email: 'johnmartins5@gmail.com',
        password: '4a5b6c',
        balance: 12000.00,
      },
      {
        clientId: 3,
        name: 'Bruna da Silva',
        email: 'bsilva123@gmail.com',
        password: '7a8b9c',
        balance: 18000.00,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};