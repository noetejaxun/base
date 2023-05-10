require('dotenv').config();

const dataBases = [];

const cantidadDB = process.env.DB_CANTIDAD || 1;

for (let i = 1; i <= cantidadDB; i++) {  

  const config = {
    env:        process.env.NODE_ENV || 'dev',
    port:       process.env.PORT || 3000,
    dbUser:     process.env[`DB_USER_${i}`],
    dbPassword: process.env[`DB_PASSWORD_${i}`],
    dbHost:     process.env[`DB_HOST_${i}`],
    dbName:     process.env[`DB_NAME_${i}`],
    dbPort:     process.env[`DB_PORT_${i}`],
    dbDialect:  process.env[`DB_DIALECT_${i}`],
  }

  dataBases.push(config);
}


module.exports = { dataBases };