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

module.exports = eventsRouter;
