const boom = require('@hapi/boom');

let db = require('../libs/sequelize');
let models = db.db.models;
const { setDB } = require('../db/setupDB');

class PersonaService {
  constructor() {
  }

  setDataBase(selectedDB) {
    const setdb = setDB(db, selectedDB);
    db = setdb.db;
    models = db.db.models;
  }

  async create(db, data) {
    this.setDataBase(db);
    const newUser = await models.Persona.create(data);
    return newUser;
  }

  async find(db) {
    this.setDataBase(db);
    const data = await models.Persona.findAll();
    return data;
  }

  async findOne(db, id) {
    this.setDataBase(db);
    const persona = await models.Persona.findByPk(id);
    if (!persona) {
      throw boom.notFound('user not found');
    }
    return persona;
  }

  async update(db, id, changes) {
    this.setDataBase(db);
    const persona = await this.findOne(db, id);
    const response = persona.update(changes);
    return response;
  }

  async delete(db, id) {
    this.setDataBase(db);
    const persona = await this.findOne(db, id);
    const response = persona.destroy();
    return response;
  }
}

module.exports = PersonaService;
