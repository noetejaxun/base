const { Model, DataTypes, Sequelize } = require('sequelize');

const PAGO_TABLE = 'pagos';

const PagoSchema =  {
    transaccion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    fecha: {
        allowNull: false,
        type: DataTypes.STRING(8),
    },
    hora: {
        allowNull: false,
        type: DataTypes.STRING,
        length: 6
    },
    productoBanco: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'producto_banco',
    },
    cuentaNegocio: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'cuenta_negocio',
    },
    cuentaCliente: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'cuenta_cliente',
    },
    monto: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    estado: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    nombreCliente: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_cliente',
    },
    nitCliente: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nit_cliente',
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
}

class Pago extends Model {

  static associate() {
    
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PAGO_TABLE,
      modelName: 'Pago',
      timestamps: false
    }
  }
}

module.exports = {
    Pago,
    PagoSchema,
    PAGO_TABLE
};