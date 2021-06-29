const db = require('../db');

const findAll = () => db.user.findMany();

const findUnique = (id) =>
  db.user.findUnique({
    where: {
      id: parseInt(id, 10),
    },
    include: {
      currentSkills: true,
      skillsToAcquire: true,
    },
  });

module.exports = { findAll, findUnique };
