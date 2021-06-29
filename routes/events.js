const eventsRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const Event = require('../models/event');

eventsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    // const { titleOrContentContains, authorId } = req.query;

    res.send(await Event.findMany());
  })
);

eventsRouter.post(
  '/:id',
  asyncHandler(async (req, res) => {
    const {
      eventType,
      location,
      image,
      duration,
      name,
      date,
      description,
      online,
    } = req.body;
    const ownerId = 1
    try {
      const newEvent = await Event.createEvent({
        eventType,
        ownerId,
        location,
        image,
        name,
        duration: parseInt(duration, 10),
        date: new Date(date),
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

module.exports = eventsRouter;
