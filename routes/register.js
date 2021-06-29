const registerRoute = require('express').Router();
const asyncHandler = require('express-async-handler');
const Register = require('../models/register');

registerRoute.post(
  '/',
  asyncHandler(async (req, res) => {
    const eventId = parseInt(req.body.eventId, 10);
    const userId = parseInt(req.body.userId, 10);
    try {
      res.status(200).send(await Register.create({ eventId, userId }));
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

module.exports = registerRoute;
