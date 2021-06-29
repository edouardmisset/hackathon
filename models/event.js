const db = require('../db');

const findAll = () => db.event.findMany();

const findByDate = (date) =>
  db.event.findMany({
    where: {
      date: {
        gte: date,
      },
    },
    orderBy: { date: 'asc' },
  });

const findByQuery = (query) =>
  db.event.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
          },
        },
        {
          description: {
            contains: query,
          },
        },
      ],
    },
  });

const create = ({
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

const findUnique = (id) =>
  db.event.findUnique({ where: { id: parseInt(id, 10) } });

const destroy = (id) => db.event.delete({ where: { id: parseInt(id, 10) } });

module.exports = {
  findByQuery,
  findByDate,
  create,
  findAll,
  findUnique,
  destroy,
};
