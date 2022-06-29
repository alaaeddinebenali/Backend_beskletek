var BrandBikes = require('../../models/bicycle/brand');
var express = require('express');
var router = express.Router();

// List
router.get('/', (req, res) => {
    BrandBikes.find().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});


// Add
router.post('/add', (req, res) => {

    var brandBikes = new BrandBikes({
        name: req.body.name
    })
    brandBikes.save().then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// update status
router.put('/update', (req, res) => {

    var brandBikesId = req.body.brandBikesId;
    var brandBikesName = req.body.name;
    BrandBikes.findByIdAndUpdate(brandBikesId, {
        name: brandBikesName
    }).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

// Delete
router.delete('/delete/:brandBikesId', (req, res) => {
    var brandBikesId = req.params.brandBikesId;
    BrandBikes.findByIdAndDelete(brandBikesId).then((data, err) => {
        if (err) res.status(500).send(err.message);
        res.status(200).send({success: true});
    }).catch(err => {
        res.status(500).send(err.message);
    });
});

module.exports = router;
