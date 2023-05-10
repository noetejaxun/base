const { Model, DataTypes } = require('sequelize');

const PERSONAS_TABLE = 'personas';

const PersonaSchema = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    apellido: {
        allowNull: false,
        type: DataTypes.STRING
    },
    edad: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    direccion: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    telefono: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    sexo: {
        allowNull: false,
        type: DataTypes.STRING,
    }
}


class Persona extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSONAS_TABLE,
            modelName: 'Persona',
            timestamps: false
        }
    }
}

module.exports = { PERSONAS_TABLE, PersonaSchema, Persona }