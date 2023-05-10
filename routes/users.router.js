const express = require('express');

const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/:db', async (req, res, next) => {
  try {
    const { db } = req.params;
    const users = await service.find(db);
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:db/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { db, id } = req.params;
      const category = await service.findOne(db, id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/:db',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { db } = req.params;
      const body = req.body;
      const newCategory = await service.create(db, body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:db/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { db, id } = req.params;
      const body = req.body;
      const category = await service.update(db, id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:db/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { db, id } = req.params;
      await service.delete(db, id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

