var Contact = require('../models/contact');
var express = require('express');
var router = express.Router();

// Liste des contact
router.get('/', (req, res) => {
    Contact.find((err, data) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    })
});


// Ajouter contact
router.post('/add', (req, res) => {
    console.log(req.body);
    var c = new Contact({
        fullName: req.body.fullName,
        phone: req.body.phone
    })
    c.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    });
});

module.exports = router;
