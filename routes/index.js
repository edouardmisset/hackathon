const eventsRouter = require('./events');

module.exports = (app) => {
  app.use('/events', eventsRouter);
  app.use('/events/:id', eventsRouter);
};
