const db = require('../db');

const findMany = () => db.event.findMany();

module.exports = {
  findMany,
};
