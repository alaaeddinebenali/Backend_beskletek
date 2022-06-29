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
        user: req.body.user,
        start_date_reservation: req.body.start_date_reservation,
        start_time: req.body.start_time,
        end_date_reservation: req.body.end_date_reservation,
        end_time: req.body.end_time,
        bicycle: req.body.bicycle,
        status: req.body.status
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
        user: req.params.user,
        start_date_reservation: req.params.start_date_reservation,
        start_time: req.params.start_time,
        end_date_reservation: req.params.end_date_reservation,
        end_time: req.params.end_time,
        bicycle: req.params.bicycle,
        status: req.params.status
    }).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
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
