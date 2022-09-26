'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE TRIGGER tr_insert_user 
      AFTER INSERT ON first_database.users FOR EACH ROW
      BEGIN
        INSERT INTO second_database.users (user_real_id, name, email)
        VALUES (NEW.id, NEW.name, NEW.email);
      END;
    `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP TRIGGER IF EXISTS tr_insert_user;
    `)
  }
};
