const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const ratingController = require('../controllers/ratingcontroller');


/**
 * @swagger
 * /api/rating:
 *  get:
 *    description: Get all the rating from DB
 *    tags: [Rating]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: Rating fetched successfully.
 */
router.get('/rating', ratingController.getRating);


/**
 * @swagger
 * /api/rating:
 *  post:
 *    description: Use to add role in DB
 *    tags: [Rating]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add rating
 *        description: Add rating in DB.
 *        schema:
 *          type: object
 *          required:
 *            - userId
 *            - propertyId
 *            - ratingStar
 *            - review
 *          properties:
 *            userId:
 *              type: string
 *            propertyId:
 *               type: string
 *            ratingStar: 
 *               type: number
 *            review:
 *               type: string
 *    responses:
 *      '200':
 *        description: rating added successfully.
 */
router.post('/rating',[
    check('userId'),
    check("propertId"),
    check("ratingStar"),
    check("review")

],ratingController.postRating);

module.exports = router;
