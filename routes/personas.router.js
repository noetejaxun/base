const express = require('express');

const PersonaService = require('./../services/personas.service');

const router = express.Router();
const service = new PersonaService();

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

