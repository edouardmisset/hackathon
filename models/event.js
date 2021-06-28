const db = require('../db');

const findAll = () => db.event.findMany();

const findMany = (date, eventType) =>
  db.event.findMany({
    where: {
      date,
      eventType,
    },
    orderBy: { date },
  });

const create = ({
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

const createMany = ({
  numberOfEvents,
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
  db.event.createMany({
    data: Array(numberOfEvents)
      .fill(null)
      .map(() => ({
        eventType,
        ownerId,
        name,
        location,
        image,
        duration,
        date,
        description,
        online,
      })),
  });

const findUnique = (id) =>
  db.event.findUnique({ where: { id: parseInt(id, 10) } });

const destroy = (id) => db.event.delete({ where: { id: parseInt(id, 10) } });

module.exports = { findMany, create, createMany, findAll, findUnique, destroy };
