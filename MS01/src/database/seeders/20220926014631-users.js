'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Gabigol',
        email: 'gabigol@gmail.com',
        uf: 'SP',
        created_at: new Date('2021-04-10'),
        updated_at: new Date('2021-04-10'),
      },
      {
        name: 'Pedro',
        email: 'pedro@gmail.com',
        uf: 'RJ',
        created_at: new Date('2021-04-10'),
        updated_at: new Date('2021-04-10'),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {
      email: 'gabigol@gmail.com',
    })
    await queryInterface.bulkDelete('users', {
      email: 'pedro@gmail.com',
    })
  }
};
