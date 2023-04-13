"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("changedposts", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userid: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      body: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      ischanged: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      contentlength: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("changedposts");
  },
};
