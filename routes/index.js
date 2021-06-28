const eventsRouter = require('./events');
const newEventRouter = require('./newEvents');

module.exports = (app) => {
  app.use('/events', eventsRouter);
  app.use('/new-event', newEventRouter);
};
