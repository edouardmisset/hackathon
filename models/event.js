const db = require('../db');

const findMany = () => db.event.findMany();

const createEvent = ({
  eventType,
  ownerId,
  name,
  location,
  image,
  duration,
  date,
  description,
  online,
}) =>
  db.event.create({
    data: {
      eventType,
      ownerId,
      name,
      location,
      image,
      duration,
      date,
      description,
      online,
    },
  });
module.exports = {
  findMany,
  createEvent,
};
