const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');
const models = sequelize.models;

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const data = await models.User.findAll({
      include:['customer']
    });
    return data;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include:['customer']
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = user.update(changes);
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);
    const response = user.destroy();
    return response;
  }
}

module.exports = UserService;
