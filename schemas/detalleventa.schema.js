const Joi = require('joi');

const id = Joi.number().integer();
const idVenta = Joi.number().integer();
const idProducto = Joi.number().integer();
const cantidad = Joi.number().integer();
const total = Joi.number();

const getDetalleVentaSchema = Joi.object({
    id: id.required()
});

const createDetalleVentaSchema = Joi.object({
    idVenta: idVenta.required(),
    idProducto: idProducto.required(),
    cantidad: cantidad.required(),
    total: total.required(),
});

const updateDetalleVentaSchema = Joi.object({
    idVenta,
    idProducto,
    cantidad,
    total,
});

module.exports = {
    getDetalleVentaSchema,
    createDetalleVentaSchema,
    updateDetalleVentaSchema
}