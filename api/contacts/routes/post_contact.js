const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../model/contact');
const router = express.Router();

router.route('/')
.post((req, res) => {
  const contact = new Contact(req.body);
  contact.save((err, contact) =>  {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
});

module.exports = router;
