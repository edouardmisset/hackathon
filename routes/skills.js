const skillsRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const Skill = require('../models/skill');
const requireCurrentUser = require('../middlewares/requireCurrentUser');

// createCurrentSkill, createSkillToAcquire

skillsRouter.post(
  '/current',
  requireCurrentUser,
  asyncHandler(async (req, res) => {
    const { newCurrentSkill, chooseLevel } = req.body;
    const { id } = req.currentUser;
    const userId = id;
    try {
      const newEvent = await Skill.createCurrentSkill({
        name: newCurrentSkill,
        userId,
        level: parseInt(chooseLevel, 10),
      });
      res.status(200).send(newEvent);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

skillsRouter.post(
  '/currentchange',
  requireCurrentUser,
  asyncHandler(async (req, res) => {
    const { id, level } = req.body;
    try {
      const newEvent = await Skill.updateCurrentSkill({
        id,
        level: parseInt(level, 10),
      });
      res.status(200).send(newEvent);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

skillsRouter.post(
  '/new',
  requireCurrentUser,
  asyncHandler(async (req, res) => {
    const { newSkillToAcquire } = req.body;
    const { id } = req.currentUser;
    const userId = id;
    try {
      const newEvent = await Skill.createSkillToAcquire({
        name: newSkillToAcquire,
        userId,
      });
      res.status(200).send(newEvent);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
);

module.exports = skillsRouter;
