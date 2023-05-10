const setupModels = require('../db/models');

function setDB(db, property) {
    db.db = db[property];
    setupModels(db.db);

    return { db };
}

module.exports = { setDB };