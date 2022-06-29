var MaterialBikes = require('../../models/bicycle/materialsBike');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    MaterialBikes.find().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});


// Add
router.post('/add', (req, res) => {

    var materialBikes = new MaterialBikes({
        name: req.body.name,
        available: req.body.available
    })
    materialBikes.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var materialBikesId = req.body.materialBikesId;
    var materialBikesName = req.body.name;
    var materialBikesAvailable = req.body.available;
    MaterialBikes.findByIdAndUpdate(materialBikesId, {available: materialBikesAvailable, name: materialBikesName}).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update_status/:materialBikesId', (req, res) => {

    var materialBikesId = req.params.materialBikesId;
    MaterialBikes.findById(materialBikesId)
        .then((data, err) => {
            if (err) res.status(500).send(err.message);
            MaterialBikes.findByIdAndUpdate(materialBikesId, {available: !data.available})
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
router.delete('/delete/:materialBikesId', (req, res) => {
    var materialBikesId = req.params.materialBikesId;
    MaterialBikes.findByIdAndDelete(materialBikesId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
