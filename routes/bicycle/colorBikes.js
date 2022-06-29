var ColorBicycle = require('../../models/bicycle/colorBike');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    ColorBicycle.find().then((data, err) => {
            if (err) res.status(500).send(err.message);
            res.status(200).send(data);
        }).catch(err => {
        res.status(500).send(err.message);
    });
});


// Add
router.post('/add', (req, res) => {

    var colorBicycle = new ColorBicycle({
        name: req.body.name,
        available: req.body.available
    })
    colorBicycle.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var bikeColorId = req.body.colorBikeId;
    var bikeName = req.body.name;
    var bikeAvailable = req.body.available;
    ColorBicycle.findByIdAndUpdate(bikeColorId, {available: bikeAvailable, name: bikeName}).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update_status/:colorBikeId', (req, res) => {

    var bikeColorId = req.params.colorBikeId;
    ColorBicycle.findById(bikeColorId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            ColorBicycle.findByIdAndUpdate(bikeColorId, {available: !data.available})
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
router.delete('/delete/:colorBikeId', (req, res) => {
    var bikeColorId = req.params.colorBikeId;
    ColorBicycle.findByIdAndDelete(bikeColorId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
