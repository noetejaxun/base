const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const axios = require("axios");

class PagoService {

  constructor() { }

  async find() {
    const rta = await models.Pago.findAll();
    return rta;
  }

  async findOne(transaccion) {
    const user = await models.Pago.findByPk(transaccion);
    if (!user) {
      throw boom.notFound('Pago not found');
    }
    return user;
  }

  async create(data) {
    const newPago = await models.Pago.create(data);

    let transaccion = "" + newPago.transaccion;
    transaccion = transaccion.padStart(6, "0");

    const pagoSocket = {
      "transaccion": transaccion,
      "fecha": newPago.fecha,
      "hora": newPago.hora,
      "productoBanco": newPago.productoBanco,
      "cuentaNegocio": newPago.cuentaNegocio,
      "cuentaCliente": newPago.cuentaCliente,
      "monto": newPago.monto,
      "estado": "02"
    }

    const response = await axios.post("http://localhost:8080/api/services/api/input", pagoSocket);

    if (response) {
    //   console.log(response.status)
    }

    return newPago;
  }

  async update(transaccion, changes) {
    const model = await this.findOne(transaccion);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = PagoService;