const eventsRouter = require('./events');
const newEventRouter = require('./newEvents');
const profileRouter = require('./profiles');
const skillRouter = require('./skills');

module.exports = (app) => {
  app.use('/events', eventsRouter);
  app.use('/new-event', newEventRouter);
  app.use('/profiles', profileRouter);
  app.use('/skills', skillRouter);
};
