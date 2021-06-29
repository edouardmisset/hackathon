const eventsRouter = require('./events');
const newEventRouter = require('./newEvents');
const profileRouter = require('./profiles');
const skillRouter = require('./skills');
const usersRouter = require('./users');

module.exports = (app) => {
  app.use('/events', eventsRouter);
  app.use('/events/:id', eventsRouter);
  app.use('/user', usersRouter);
  app.use('/new-event', newEventRouter);
  app.use('/profiles', profileRouter);
  app.use('/skills', skillRouter);
};
