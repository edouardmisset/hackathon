const eventsRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const Event = require('../models/event');

eventsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    // const { titleOrContentContains, authorId } = req.query;
    try {
      res.send(await Event.findAll());
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
      eventType,
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
        eventType,
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

module.exports = eventsRouter;
