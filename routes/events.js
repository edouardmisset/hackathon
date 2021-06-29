const eventsRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const Event = require('../models/event');

eventsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      res.send(await Event.findAll());
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

eventsRouter.get(
  '/upcoming',
  asyncHandler(async (req, res) => {
    try {
      const upcoming = await Event.findByDate(new Date());
      res.send(upcoming);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

eventsRouter.get(
  '/tags',
  asyncHandler(async (req, res) => {
    try {
      const tags = await Event.findTags();
      res.send(tags);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

eventsRouter.post(
  '/search/',
  asyncHandler(async (req, res) => {
    const { value } = req.body;
    try {
      const searchedEvents = await Event.findByQuery(value);
      res.send(searchedEvents);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

eventsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const event = await Event.findUnique(id);
      if (!Object.entries(event).length)
        res.status(200).send(`Event (${id}) not found`);
      else res.send(event);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

eventsRouter.post(
  '/',
  asyncHandler(async (req, res) => {
    const {
      ownerId,
      location,
      image,
      duration,
      name,
      date,
      description,
      online,
    } = req.body;
    try {
      const newEvent = await Event.create({
        ownerId,
        location,
        image,
        name,
        duration,
        date,
        description,
        online,
      });
      res.status(200).send(newEvent);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

eventsRouter.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const deletedEvent = await Event.destroy(id);
      res.status(201).send(deletedEvent);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

eventsRouter.post(
  '/:id',
  asyncHandler(async (req, res) => {
    const { location, image, duration, name, date, description, online, tag } =
      req.body;
    const ownerId = 1;
    try {
      const newEvent = await Event.createEvent({
        ownerId,
        location,
        image,
        name,
        duration: parseInt(duration, 10),
        date: new Date(date),
        description,
        online,
      });
      await Event.linkTags({ eventId: newEvent.id, tagId: parseInt(tag, 10) });
      res.status(200).send(newEvent);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

module.exports = eventsRouter;
