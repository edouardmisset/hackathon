const db = require('../db');

const findAll = () => db.event.findMany({ include: { owner: true } });
const findTags = () => db.tag.findMany();

const findByDate = (date) =>
  db.event.findMany({
    where: {
      date: {
        gte: date,
      },
    },
    include: { owner: true },
    orderBy: { date: 'asc' },
  });

const findByQuery = (searchValue) =>
  db.event.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchValue,
          },
        },
        {
          description: {
            contains: searchValue,
          },
        },
      ],
    },
  });

const findByUser = (userId) =>
  db.user
    .findUnique({
      where: {
        id: parseInt(userId, 10),
      },
      include: {
        events: true,
      },
    })
    .then(({ events }) => events);

const findUnique = (id) =>
  db.event.findUnique({
    where: { id: parseInt(id, 10) },
    include: { owner: true },
  });

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

const eventSkillsToAcquire = (eventId) =>
  db.skillsToAcquireToEvent.findMany({
    where: {
      eventId,
    },
    include: {
      skill: true,
    },
  });

const eventCurrentSkills = (eventId) =>
  db.currentSkillsToEvent.findMany({
    where: {
      eventId,
    },
    include: {
      skill: true,
    },
  });

const eventTags = (eventId) =>
  db.eventType.findMany({
    where: {
      eventId,
    },
    include: {
      tag: true,
    },
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
  eventSkillsToAcquire,
  eventCurrentSkills,
  eventTags,
  findByUser,
};
