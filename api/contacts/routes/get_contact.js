const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../model/contact');
const router = express.Router();


router.route('/')
.get((req, res) => {
  // const contact = new Contact(req.body);

		Contact.find({},(err, contact) => {
			if (err){
				res.status(500).send({error:"C PA BON"});
			}
			else {
				res.json(contact);
			}
		})

	});

module.exports = router;
