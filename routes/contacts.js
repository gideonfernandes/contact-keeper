const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
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
router.post('/', [
  auth, [
    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Please include a valid email.').isEmail()
  ]
], async (request, response) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() })
  };

  const { name, email, phone, type } = request.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: request.user.id
    });

    const contact = await newContact.save();
    response.json(contact);
  } catch (error) {
    console.error(error.message);
    response.status(500).send('Server Error.')
  };
});

// @route         PUT api/contacts/:id
// @description   Update contact
// @access        Private
router.put('/:id', auth, async (request, response) => {
  const { name, email, phone, type } = request.body;

  const filter = request.params.id;
  const updateData = { name, email, phone, type };

  try {
    const contactUpdated = await Contact.findOneAndUpdate(filter, updateData, {
      new: true
    });

    response.json(contactUpdated);
  } catch (error) {
    console.error(error.message);
    response.status(500).send('Server Error.')
  };  
});

// @route         DELETE api/contacts/:id
// @description   Delete contact
// @access        Private
router.delete('/:id', async (request, response) => {
  const filter = request.params.id;

  try {
    const contactDeleted = await Contact.findByIdAndDelete(filter);

    response.json({ message: 'Contact deleted.' });
  } catch (error) {
    console.error(error.message);
    response.status(500).send('Server Error.')
  };  
});

module.exports = router;
