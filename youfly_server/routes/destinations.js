var express = require('express');
var router = express.Router();
const Destination = require("../models/destinations");

/* GET destinations. */
router.get('/', function (req, res, next) {
    //res.send(destinations);
    Destination.find().then((result) => {
        res.send(result);
    });

});

//replace top one, put id in path get by uuid
router.get("/:id", function (req, res, next) {
    const destinationId = req.params.id;
    Destination.findById(destinationId).then((result) => {
        if (result) {
            res.send(result);
        } else {
            res.status(404).send();
        }
    });
});

//by destinationID
router.get("/destinationID/:id", function (req, res, next) {
    const destinationId = req.params.id;
    Destination.find({ destinationId: destinationId }).then((result) => {
        if (result) {
            res.send(result);
        } else {
            res.status(404).send();
        }
    });
});



module.exports.router = router;