const Sequelize = require('sequelize');
const database = require('./db');

const date = new Date();
const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

const Schema = database.define('schema', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    newUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: currentDate
    }
})

module.exports = Schema;