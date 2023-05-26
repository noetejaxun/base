const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().max(50);
const precio = Joi.number();
const stock = Joi.number().integer();
const url = Joi.string().uri();

const getProductoSchema = Joi.object({
    id: id.required()
});

const createProductSchema = Joi.object({
    nombre: nombre.required(),
    precio: precio.required(),
    stock: stock.required(),
    url: url.required(),
});

const updateProductoSchema = Joi.object({
    nombre,
    precio,
    stock,
    url
});

module.exports = {
    getProductoSchema,
    createProductSchema,
    updateProductoSchema
}