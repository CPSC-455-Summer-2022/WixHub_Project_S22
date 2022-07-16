var express = require('express');
var router = express.Router();
const Destination = require("../models/destinations");

let destinations = [
    { "id": 1, "city": "Vancouver", "country": "Canada" },
    { "id": 2, "city": "London", "country": "England" },
    { "id": 3, "city": "Amsterdam", "country": "Netherlands" },
    { "id": 4, "city": "Dubai", "country": "United Arab Emirates" },
    { "id": 5, "city": "Beijing", "country": "China" },
    { "id": 6, "city": "Bali", "country": "Indonesia" },
    { "id": 7, "city": "Crete", "country": "Greece" },
    { "id": 8, "city": "Cabo San Lucas", "country": "Mexico" },
    { "id": 9, "city": "Paris", "country": "France" },
    { "id": 10, "city": "Oslo", "country": "Norway" },
    { "id": 11, "city": "Rome", "country": "Italy" },
    { "id": 12, "city": "New York", "country": "United States" },
    { "id": 13, "city": "Kyushi", "country": "Japan" },
    { "id": 14, "city": "Singapore", "country": "Singapore" },
];

/* GET destinations. */
router.get('/', function (req, res, next) {
    //res.send(destinations);
    Destination.find().then((result) => {
        res.send(result);
    });

});

/* GET a single destination listing in JSON format. */
router.get('/find', function (req, res, next) {
    const foundDestination = destinations.find(destinations => destinations.id === req.query.id);
    return res.send(foundDestination);
    // const destinationId = req.query.id;
    // Destination.findById(destinationId).then((result) => {
    //     if (result) {
    //         res.send(result);
    //     } else {
    //         res.status(404).send();
    //     }
    // });
});
//replace top one, put id in path
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



module.exports.router = router;
module.exports.destinations = destinations;