const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const niceplaceController = require('../controllers/niceplacecontroller');


/**
 * @swagger
 * /api/niceplace:
 *  get:
 *    description: Get all the Niceplace from DB
 *    tags: [Niceplace]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: Niceplace fetched successfully.
 */
router.get('/niceplace', niceplaceController.getNiceplace);


/**
 * @swagger
 * /api/niceplace:
 *  post:
 *    description: Use to add Niceplace in DB
 *    tags: [Niceplace]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add Niceplace
 *        description: Add Niceplace in DB.
 *        schema:
 *          type: object
 *          required:
 *            - propertyId
 *            - userId
 *            - URL
 *            - status
 *          properties:
 *            propertyId:
 *              type: string
 *            userId:
 *               type: string
 *            URL: 
 *               type: string
 *            status:
 *               type: string
 *    responses:
 *      '200':
 *        description: Niceplace added successfully.
 */
router.post('/niceplace',[
    check('propertId'),
    check("userId"),
    check("URL"),
    check("status")

],niceplaceController.postNiceplace);

module.exports = router;
