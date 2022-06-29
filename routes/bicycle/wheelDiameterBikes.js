var WheelDiameterBike = require('../../models/bicycle/wheelDiameterBike');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    WheelDiameterBike.find().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});


// Add
router.post('/add', (req, res) => {

    var wheelDiameterBike = new WheelDiameterBike({
        size: req.body.size,
        available: req.body.available
    })
    wheelDiameterBike.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var wheelDiameterBikeId = req.body.wheelDiameterBikeId;
    var wheelDiameterBikeIdSize = req.body.size;
    var wheelDiameterBikeIdAvailable = req.body.available;
    WheelDiameterBike.findByIdAndUpdate(wheelDiameterBikeId, {available: wheelDiameterBikeIdSize, size: wheelDiameterBikeIdAvailable}).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update_status/:sizeBikesId', (req, res) => {

    var wheelDiameterBikeId = req.params.wheelDiameterBikeId;
    WheelDiameterBike.findById(wheelDiameterBikeId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            WheelDiameterBike.findByIdAndUpdate(wheelDiameterBikeId, {available: !data.available})
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
router.delete('/delete/:wheelDiameterBikeId', (req, res) => {
    var wheelDiameterBikeId = req.params.wheelDiameterBikeId;
    WheelDiameterBike.findByIdAndDelete(wheelDiameterBikeId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
