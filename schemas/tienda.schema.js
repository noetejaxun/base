const Joi = require('joi');

const nit = Joi.string().max(12);
const nombre = Joi.string().max(50);
const direccion = Joi.string().max(100);
const telefono = Joi.string().max(20);

const getTiendaSchema = Joi.object({
  nit: nit.required()
});

const createTiendaSchema = Joi.object({
  nit: nit.required(),
  nombre: nombre.required(),
  direccion: direccion.required(),
  telefono: telefono.required()
});

const updateTiendaSchema = Joi.object({
  nombre,
  direccion,
  telefono,
});

module.exports = {
  getTiendaSchema,
  createTiendaSchema,
  updateTiendaSchema
}