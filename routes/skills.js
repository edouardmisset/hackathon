const skillsRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const Skill = require('../models/skill');

// createCurrentSkill, createSkillToAcquire

skillsRouter.post(
  '/current',
  asyncHandler(async (req, res) => {
    const { newCurrentSkill, userId, chooseLevel } = req.body;
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
  asyncHandler(async (req, res) => {
    const { newSkillToAcquire, userId } = req.body;
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
