const Sequelize = require('sequelize');
const dbConfig = require("../config/database");

const User = require('../models/User');
const Establishment = require('../models/Establishment');

const connection = new Sequelize(dbConfig);

User.init(connection);
Establishment.init(connection);

module.exports = connection;