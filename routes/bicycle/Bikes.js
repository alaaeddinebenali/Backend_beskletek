var Bike = require('../../models/bicycle/bike');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    Bike.find().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// List
router.get('/:bikeId', (req, res) => {
    Bike.findById(req.params.bikeId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// Add
router.post('/add', (req, res) => {

    var bike = new Bike({
        name: req.body.name,
        ref: req.body.ref,
        brand: req.body.brand,
        bike_size: req.body.bike_size,
        bike_wheel_diameter: req.body.bike_wheel_diameter,
        quantity: req.body.quantity,
        weight: req.body.weight,
        price: req.body.price,
        available: req.body.available,
        breakdown: req.body.breakdown,
        color: req.body.color,
        type: req.body.type,
        gender: req.body.gender
    })
    bike.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var bikeId = req.body.bikeId;
    Bike.findByIdAndUpdate(bikeId, {
        name: req.body.name,
        ref: req.body.ref,
        brand: req.body.brand,
        bike_size: req.body.bike_size,
        bike_wheel_diameter: req.body.bike_wheel_diameter,
        quantity: req.body.quantity,
        weight: req.body.weight,
        price: req.body.price,
        available: req.body.available,
        breakdown: req.body.breakdown,
        color: req.body.color,
        type: req.body.type,
        gender: req.body.gender
    }).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update_available/:bikeId', (req, res) => {

    var bikeId = req.params.bikeId;
    Bike.findById(bikeId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            Bike.findByIdAndUpdate(bikeId, {available: !data.available})
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

// update status
router.put('/update_breakdown/:bikeId', (req, res) => {

    var bikeId = req.params.bikeId;
    Bike.findById(bikeId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            Bike.findByIdAndUpdate(bikeId, {breakdown: !data.breakdown})
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
router.delete('/delete/:bikeId', (req, res) => {
    var bikeId = req.params.bikeId;
    Bike.findByIdAndDelete(bikeColorId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
