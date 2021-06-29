const authRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const { SESSION_COOKIE_DOMAIN, SESSION_COOKIE_NAME } = require('../env');

authRouter.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password, stayConnected } = req.body;
    const user = await User.findByEmail(email);
    if (
      await User.verifyPassword(password, user.hashedPassword)
    ) {
      if (stayConnected) {
        // --------- session cookie will be valid for a day --------- //
        req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
      }
      console.log(req.session)
      req.session.userId = user.id;
      req.session.save(() => {
        res.sendStatus(200);
      });
    } else {
      res.status(401).send('Informations non valides');
    }
  })
);

authRouter.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).send('Could not destroy session');
    res.clearCookie(SESSION_COOKIE_NAME, { domain: SESSION_COOKIE_DOMAIN });
    return res.status(200).send('session deleted');
  });
});

module.exports = authRouter;
