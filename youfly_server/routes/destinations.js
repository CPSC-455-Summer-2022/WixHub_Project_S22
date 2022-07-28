var express = require('express');
var router = express.Router();
const Destination = require("../models/destinations");

/**
 * @swagger
 *  tags:
 *    name: Destinations
 *    description: destination specific requests
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Destination:
 *       type: object
 *       required:
 *         - id
 *         - city
 *         - country
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         city:
 *           type: string
 *           description: the name of the city 
 *         country:
 *           type: string
 *           description: the name of the country
 *       example:
 *         id: 1
 *         city: "Toronto"
 *         country: "Canada"
 */

/**
* @swagger
* /destinations:
*   get:
*     summary: Returns all destinations in db
*     tags: [Destinations]
*     responses:
*       200:
*         description: the list of all destinations
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Destination'
*/
router.get('/', function (req, res, next) {
    //res.send(destinations);
    Destination.find().then((result) => {
        res.send(result);
    });

});

/**
* @swagger
* /destinations/:id:
*   get:
*     summary: Returns specified destination according to provided id
*     tags: [Destinations]
*     responses:
*       200:
*         description: a single destination based on a given id
*         content:
*           application/json:
*             schema:
*               type: object
*               items:
*                 $ref: '#/components/schemas/Destination'
*     parameters:
*     - name: id
*       description: destinations's id
*       required: true
*       type: string
*/
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

/**
* @swagger
* /destinations/destinationID/:id:
*   get:
*     summary: Returns specified destination according to provided destinationID
*     tags: [Destinations]
*     responses:
*       200:
*         description: a single destination based on a given destinationID
*         content:
*           application/json:
*             schema:
*               type: object
*               items:
*                 $ref: '#/components/schemas/Destination'
*     parameters:
*     - name: destinationID
*       description: destinations's id
*       required: true
*       type: string
*/
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