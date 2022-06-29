var TypeBicycle = require('../../models/bicycle/typeBike');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    TypeBicycle.find().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});


// Add
router.post('/add', (req, res) => {

    var typeBicycle = new TypeBicycle({
        name: req.body.name,
        available: req.body.available
    })
    typeBicycle.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var typeBicycleId = req.body.typeBicycleId;
    var typeBicycleName = req.body.name;
    var typeBicycleAvailable = req.body.available;
    TypeBicycle.findByIdAndUpdate(typeBicycleId, {available: typeBicycleName, name: typeBicycleAvailable}).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update_status/:typeBicycleId', (req, res) => {

    var typeBicycleId = req.params.typeBicycleId;
    TypeBicycle.findById(typeBicycleId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            TypeBicycle.findByIdAndUpdate(typeBicycleId, {available: !data.available})
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
router.delete('/delete/:typeBicycleId', (req, res) => {
    var typeBicycleId = req.params.typeBicycleId;
    TypeBicycle.findByIdAndDelete(bikeColorId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
