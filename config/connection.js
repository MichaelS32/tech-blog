const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
if (ProcessingInstruction.env.JAWSDB_URL) {
    sequelize = new Sequelize(rocess.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: process.env.JAWSDB_HOST,
        dialect: 'mysql',
        port: 3306,
    })
}