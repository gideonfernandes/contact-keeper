const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route         GET api/contacts
// @description   Get all users contacts
// @access        Private
router.get('/', auth, async (request, response) => {
  try {
    const contacts = await Contact
      .find({ user: request.user.id })
      .sort({ date: -1 });

    response.json(contacts);
  } catch (error) {
    console.error(error.message);
    response.status(500).send('Server Error.');
  };
});

// @route         POST api/contacts
// @description   Add new contact
// @access        Private
router.post('/', (request, response) => {
  response.send('Add contact.');
});

// @route         PUT api/contacts/:id
// @description   Update contact
// @access        Private
router.put('/:id', (request, response) => {
  response.send('Update contact.');
});

// @route         DELETE api/contacts/:id
// @description   Delete contact
// @access        Private
router.delete('/:id', (request, response) => {
  response.send('Delete contact.');
});

module.exports = router;
