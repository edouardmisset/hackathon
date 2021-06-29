const db = require('../db');

const findAll = () => db.event.findMany();
const findTags = () => db.tag.findMany();

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
const linkTags = ({ eventId, tagId }) =>
  db.eventType.create({
    data: {
      eventId,
      tagId,
    },
  });

const linkCurrentSkills = ({ eventId, skillId }) =>
  db.currentSkillsToEvent.create({
    data: {
      eventId,
      skillId,
    },
  });

const linkSkillsToAcquire = ({ eventId, skillId }) =>
  db.skillsToAcquireToEvent.create({
    data: {
      eventId,
      skillId,
    },
  });

// data: [
//   { name: 'Bob', email: 'bob@prisma.io' },
//   { name: 'Bobo', email: 'bob@prisma.io' }, // Duplicate unique key!
//   { name: 'Yewande', email: 'yewande@prisma.io' },
//   { name: 'Angelique', email: 'angelique@prisma.io' },
// ],

// await db.event.createMany({
//   data: Array(10)
//     .fill(null)
//     .map(() => ({
//       name: faker.name.firstName(),
//       description: faker.name.jobDescriptor(),
//       online: faker.datatype.boolean(),
//       date: faker.datatype.datetime(),
//       duration: faker.datatype.number(),
//       image: faker.image.image(),
//       location: faker.address.city(),
//       ownerId: 1,
//     })),
// });

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
  findByQuery,
  findByDate,
  create,
  findAll,
  findUnique,
  destroy,
  createEvent,
  findTags,
  linkTags,
  linkCurrentSkills,
  linkSkillsToAcquire,
};
