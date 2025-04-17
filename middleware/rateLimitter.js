const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    msg: 'Too many requests, please wait 15 minutes',
  },
});

module.exports = authLimiter;
