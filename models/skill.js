const db = require('../db');

const createCurrentSkill = ({ name, userId, level }) =>
  db.currentSkills.create({
    data: {
      name,
      userId,
      level,
    },
  });

const createSkillToAcquire = ({ name, userId }) =>
  db.skillsToAcquire.create({
    data: {
      name,
      userId,
    },
  });

const updateCurrentSkill = ({ id, level }) =>
  db.currentSkills.update({
    where: {
      id,
    },
    data: { level },
  });

module.exports = {
  createCurrentSkill,
  createSkillToAcquire,
  updateCurrentSkill,
};
