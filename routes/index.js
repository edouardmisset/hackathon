const eventsRouter = require('./events');
const newEventRouter = require('./newEvents');
const currentUserRouter = require('./currentUser');
const profileRouter = require('./profiles');
const skillRouter = require('./skills');
const registerRouter = require('./register');
const usersRouter = require('./users');
const authRouter = require('./auth');

module.exports = (app) => {
  app.use('/events', eventsRouter);
  app.use('/events/:id', eventsRouter);
  app.use('/currentUser', currentUserRouter);
  app.use('/user', usersRouter);
  app.use('/auth', authRouter);
  app.use('/new-event', newEventRouter);
  app.use('/profiles', profileRouter);
  app.use('/skills', skillRouter);
  app.use('/register', registerRouter);
};
