const { Sequelize } = require('sequelize');
const { dataBases } = require('../config/config');
const setupModels = require('../db/models');

let db = { db: null};

dataBases.forEach((config, index) => {
    const USER      = encodeURIComponent(config.dbUser);
    const PASSWORD  = encodeURIComponent(config.dbPassword);
    const URI       = `${config.dbDialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
    
    db[`db${index + 1}`] = new Sequelize(URI, {
        dialect: `${config.dbDialect}`,
        logging: true
    });

    setupModels(db[`db${index + 1}`]);

    db[`db${index + 1}`].sync();

    db.db = db[`db${index + 1}`];
    
});

module.exports = db;