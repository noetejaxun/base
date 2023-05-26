const Joi = require('joi');

const id = Joi.number().integer();
const descuento = Joi.number().integer();

const getTipoClienteSchema = Joi.object({
  id: id.required()
});

const createTipoClienteSchema = Joi.object({
  descuento: descuento.required()
});

const updateTipoClienteSchema = Joi.object({
  descuento
})

module.exports = {
  getTipoClienteSchema,
  createTipoClienteSchema,
  updateTipoClienteSchema
}