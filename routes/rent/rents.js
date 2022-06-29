var Rent = require('../../models/rent/rent');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    Rent.find().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// List
router.get('/:rentId', (req, res) => {
    Rent.findById(req.params.bikeId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// Add
router.post('/add', (req, res) => {

    var rent = new Rent({
        user: req.params.user,
        start_date_reservation: req.params.start_date_reservation,
        start_time: req.params.start_time,
        end_date_reservation: req.params.end_date_reservation,
        end_time: req.params.end_time,
        bicycle: req.params.bicycle,
        status: req.params.status
    })
    rent.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var rentId = req.body.rentId;
    Rent.findByIdAndUpdate(rentId, {
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

    var rentId = req.params.rentId;
    Rent.findById(bikeId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            Rent.findByIdAndUpdate(rentId, {available: !data.available})
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
router.put('/update_status/:rentId', (req, res) => {

    var rentId = req.params.rentId;
    Rent.findById(rentId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            Rent.findByIdAndUpdate(rentId, {status: req.body.status})
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
router.delete('/delete/:rentId', (req, res) => {
    var rentId = req.params.rentId;
    Rent.findByIdAndDelete(rentId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
