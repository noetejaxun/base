const Joi = require('joi');

const nit = Joi.string().max(12);
const nombre = Joi.string().max(50);
const apellido = Joi.string().max(50);
const telefono = Joi.string().max(20);
const idTipoCliente = Joi.number().integer();

const getClienteSchema = Joi.object({
  nit: nit.required()
});

const createClienteSchema = Joi.object({
  nit: nit.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  telefono: telefono.required(),
  idTipoCliente: idTipoCliente.required()
});

const updateClienteSchema = Joi.object({
  nombre,
  apellido,
  telefono,
  idTipoCliente
});

module.exports = {
  getClienteSchema,
  createClienteSchema,
  updateClienteSchema
}