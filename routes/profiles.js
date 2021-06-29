const profileRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const Profile = require('../models/profile');
const requireCurrentUser = require('../middlewares/requireCurrentUser');

profileRouter.get(
  '/',
  requireCurrentUser,
  asyncHandler(async (req, res) => {
    const { id } = req.currentUser;

    try {
      const details = await Profile.findUnique(id);
      if (!details) res.status(200).send('No details found');
      else res.send(details);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

module.exports = profileRouter;
