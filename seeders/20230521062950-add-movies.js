'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('movies', [{
       name: 'Anni Manchi Shakunale',
       language: "Telugu",
       type: '2D',
       createdAt: new Date().toISOString(),
       updatedAt: new Date().toISOString(),
     },
     {
      name: '2018',
      language: "English",
      type: '2D',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
