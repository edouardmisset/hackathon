const eventsRouter = require('./events');
const newEventRouter = require('./newEvents');
const profileRouter = require('./profiles');

module.exports = (app) => {
  app.use('/events', eventsRouter);
  app.use('/new-event', newEventRouter);
  app.use('/profiles', profileRouter);
};
