const {  User, UserSchema } = require('./user.model');
const {  Persona, PersonaSchema } = require('./personas.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Persona.init(PersonaSchema, Persona.config(sequelize));
}

module.exports = setupModels;