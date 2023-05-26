'use strict';

const { PagoSchema, PAGO_TABLE } = require('./../models/pago.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PAGO_TABLE, PagoSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PAGO_TABLE);
  }
};