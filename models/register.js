const db = require('../db');

const create = ({ eventId, userId }) =>
  db.userRegisteredToEvent.create({
    data: {
      eventId,
      userId,
    },
  });

module.exports = {
  create,
};
