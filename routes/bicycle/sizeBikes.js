var SizeBikes = require('../../models/bicycle/sizeBike');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    SizeBikes.find().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});


// Add
router.post('/add', (req, res) => {

    var sizeBikes = new SizeBikes({
        size: req.body.size,
        available: req.body.available
    })
    sizeBikes.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var sizeBikesId = req.body.sizeBikesId;
    var sizeBikesSize = req.body.size;
    var sizeBikesAvailable = req.body.available;
    SizeBikes.findByIdAndUpdate(sizeBikesId, {available: sizeBikesAvailable, size: sizeBikesSize}).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update_status/:sizeBikesId', (req, res) => {

    var sizeBikesId = req.params.sizeBikesId;
    SizeBikes.findById(sizeBikesId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            SizeBikes.findByIdAndUpdate(sizeBikesId, {available: !data.available})
                .then((data, err) => {
                    if (err) res.status(500).send(err.message);
                    res.status(200).send({success: true});
                }).catch(err => {
                res.status(500).send(err.message);
            });
        }).catch(err => {
        res.status(500).send(err.message);
    });
});

// Delete
router.delete('/delete/:sizeBikesId', (req, res) => {
    var sizeBikesId = req.params.sizeBikesId;
    SizeBikes.findByIdAndDelete(sizeBikesId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
