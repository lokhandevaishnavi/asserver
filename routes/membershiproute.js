const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const membershipController = require('../controllers/membershipcontroller');

/**
 * @swagger
 * /api/membership:
 *  get:
 *    description: Get all the membership from DB
 *    tags: [Membership]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description:memberships fetched successfully.
 */
router.get('/membership', membershipController.getMembership);


/**
 * @swagger
 * /api/membership:
 *  post:
 *    description: Use to add membership in DB
 *    tags: [Membership]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add membership
 *        description: Add membership in DB.
 *        schema:
 *          type: object
 *          required:
 *            - userid
 *            - startdate
 *            - enddate
 *          properties:
 *            userid:
 *              type: string
 *            startdate:
 *              type: date
 *            enddate:
 *              type: date
 *    responses:
 *      '200':
 *        description: membership added successfully.
 */
router.post('/membership',[
   
    check('userid'),
    check('startdate'),
    check('enddate')
    
],membershipController.postMembership);


module.exports = router; 