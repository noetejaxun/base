const Joi = require('joi');

const transaccion = Joi.number().integer();
const fecha = Joi.string().min(8).max(8);
const hora = Joi.string().min(6).max(6);
const productoBanco = Joi.string().min(10).max(10);
const cuentaNegocio = Joi.string().min(10).max(10);
const cuentaCliente = Joi.string().min(10).max(10);
const nombreCliente = Joi.string().max(50);
const nitCliente = Joi.string().max(20);
const monto = Joi.string().min(10).max(10);
const estado = Joi.string().min(2).max(2);

const getPagoSchema = Joi.object({
    transaccion: transaccion.required()
});

const createPagoSchema = Joi.object({
    fecha: fecha.required(),
    hora: hora.required(),
    productoBanco: productoBanco.required(),
    cuentaNegocio: cuentaNegocio.required(),
    cuentaCliente: cuentaCliente.required(),
    monto: monto.required(),
    estado: estado.required(),
    nombreCliente: nombreCliente.required(),
    nitCliente: nitCliente.required(),
});

const updatePagoSchema = Joi.object({
    fecha,
    hora,
    productoBanco,
    cuentaNegocio,
    cuentaCliente,
    monto,
    estado,
    nombreCliente,
    nitCliente,
});

module.exports = {
  getPagoSchema,
  createPagoSchema,
  updatePagoSchema
}