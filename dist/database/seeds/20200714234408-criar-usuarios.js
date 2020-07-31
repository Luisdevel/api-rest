"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Luis 10',
        email: 'luis10@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luis 20',
        email: 'luis20@gmail.com',
        password_hash: await bcryptjs.hash('389201', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luis 30',
        email: 'luis30@gmail.com',
        password_hash: await bcryptjs.hash('9403984', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},

};
