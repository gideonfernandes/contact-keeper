const express = require('express');
const router = express.Router();

// @route         GET api/contacts
// @description   Get all users contacts
// @access        Private
router.get('/', (request, response) => {
  response.send('Get all contacts.');
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