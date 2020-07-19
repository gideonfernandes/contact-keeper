const express = require('express');
const router = express.Router();

// @route         GET api/auth
// @description   Get logged in user
// @access        Private
router.get('/', (request, response) => {
  response.send('Get logged user.');
});

// @route         POST api/auth
// @description   Auth user & get token
// @access        Public
router.post('/', (request, response) => {
  response.send('Log in user.');
});

module.exports = router;
