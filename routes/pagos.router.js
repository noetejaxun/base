const express = require('express');

const PagoService = require('../services/pago.service');
const validationHandler = require('../middlewares/validator.handler');
const {
  createPagoSchema,
  getPagoSchema,
  updatePagoSchema,
} = require('../schemas/pago.schema');

const router = express.Router();
const service = new PagoService();

router.get('/',  async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.get('/:transaccion',  async (req, res, next) => {
  try {
    const { transaccion } = req.params;
    res.json(await service.findOne(transaccion));
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validationHandler(createPagoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:transaccion',
  validationHandler(getPagoSchema, 'params'),
  validationHandler(updatePagoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { transaccion } = req.params;
      const body = req.body;
      res.status(201).json(await service.update(transaccion, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validationHandler(getPagoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;