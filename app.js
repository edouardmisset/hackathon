const express = require('express');
const session = require('express-session');
const cors = require('./middlewares/cors');

const initRoutes = require('./routes');
const handleRecordNotFoundError = require('./middlewares/handleRecordNotFoundError');
const handleValidationError = require('./middlewares/handleValidationError');
const handleServerInternalError = require('./middlewares/handleServerInternalError');
const { PORT,
  inTestEnv,
  inProdEnv,
  SESSION_COOKIE_SECRET,
  SESSION_COOKIE_NAME,
  SESSION_COOKIE_DOMAIN, } = require('./env');

const sessionStore = require('./sessionStore');

const app = express();

app.set('x-powered-by', false); // for security
app.set('trust proxy', 1);

app.use(express.json());



app.use(cors);

app.use(
  session({
    key: SESSION_COOKIE_NAME,
    secret: SESSION_COOKIE_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: inProdEnv,
      domain: SESSION_COOKIE_DOMAIN,
      sameSite: true,
    },
  })
);
app.use('/file-storage', express.static('file-storage'));

initRoutes(app);

app.use(handleRecordNotFoundError);
app.use(handleValidationError);
app.use(handleServerInternalError);

// server setup
const server = app.listen(PORT, () => {
  if (!inTestEnv) {
    console.log(`Server running on port ${PORT}`);
  }
});

// process setup : improves error reporting
process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('uncaughtException', (error) => {
  console.error('uncaughtException', JSON.stringify(error), error.stack);
  process.exit(1);
});

module.exports = server;
