var GenderUserBicycle = require('../../models/bicycle/genderUser');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    GenderUserBicycle.find().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});


// Add
router.post('/add', (req, res) => {

    var genderUser = new GenderUserBicycle({
        name: req.body.name
    })
    genderUser.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var genderUserId = req.body.genderUserId;
    var genderUserName = req.body.name;
    GenderUserBicycle.findByIdAndUpdate(genderUserId, {name: genderUserName}).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// Delete
router.delete('/delete/:genderUserId', (req, res) => {
    var genderUserId = req.params.genderUserId;
    GenderUserBicycle.findByIdAndDelete(genderUserId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
