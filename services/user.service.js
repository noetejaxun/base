const boom = require('@hapi/boom');

let db = require('../libs/sequelize');
let models = db.db.models;
const { setDB } = require('../db/setupDB');

class UserService {
  constructor() {
  }

  setDataBase(selectedDB) {
    const setdb = setDB(db, selectedDB);
    db = setdb.db;
    models = db.db.models;
  }

  async create(db, data) {
    this.setDataBase(db);
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find(db) {
    this.setDataBase(db);
    const data = await models.User.findAll();
    return data;
  }

  async findOne(db, id) {
    this.setDataBase(db);
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(db, id, changes) {
    this.setDataBase(db);
    const user = await this.findOne(db, id);
    const response = user.update(changes);
    return response;
  }

  async delete(db, id) {
    this.setDataBase(db);
    const user = await this.findOne(db, id);
    const response = user.destroy();
    return response;
  }
}

module.exports = UserService;
