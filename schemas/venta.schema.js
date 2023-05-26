const Joi = require('joi');

const id = Joi.number().integer();
const nitTienda = Joi.string().max(12);
const nitCliente = Joi.string().max(12);
const total = Joi.number();
const idPago = Joi.number().integer();

const getVentaSchema = Joi.object({
    id: id.required()
});

const createVentaSchema = Joi.object({
    nitTienda: nitTienda.required(),
    nitCliente: nitCliente.required(),
    total: total.required(),
    idPago: idPago.required(),
});

const updateVentaSchema = Joi.object({
    nitTienda,
    nitCliente,
    total,
    idPago,
});

module.exports = {
  getVentaSchema,
  createVentaSchema,
  updateVentaSchema
}