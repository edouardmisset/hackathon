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

const linkCurrentSkills = ({ eventId, chosenSkills }) =>
  db.currentSkillsToEvent.createMany({
    data: chosenSkills.map((skill) => ({
      eventId,
      skillId: parseInt(skill, 10),
    })),
  });
const linkSkillsToAcquire = ({ eventId, chosenNewSkills }) =>
  db.skillsToAcquireToEvent.createMany({
    data: chosenNewSkills.map((skill) => ({
      eventId,
      skillId: parseInt(skill, 10),
    })),
  });

const createEvent = ({
  ownerId,
  name,
  location,
  image,
  duration,
  date,
  description,
  online,
  popularity,
}) =>
  db.event.create({
    data: {
      owner: { connect: { id: ownerId } },
      name,
      location,
      image,
      duration,
      date,
      description,
      online,
      popularity,
    },
  });

module.exports = {
  findByQuery,
  findByDate,
  findAll,
  findUnique,
  destroy,
  createEvent,
  findTags,
  linkTags,
  linkCurrentSkills,
  linkSkillsToAcquire,
};
