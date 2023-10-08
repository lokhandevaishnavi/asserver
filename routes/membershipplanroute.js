const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const membershipplanController = require('../controllers/membershipplancontroller');


/**
 * @swagger
 * /api/membershipplan:
 *  get:
 *    description: Get all the membershipplan from DB
 *    tags: [Membershipplan]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: Membershipplan fetched successfully.
 */
router.get('/membershipplan', membershipplanController.getMembershipplan);


/**
 * @swagger
 * /api/membershipplan:
 *  post:
 *    description: Use to add membershipplan in DB
 *    tags: [Membershipplan]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add membershipplan
 *        description: Add membershipplan in DB.
 *        schema:
 *          type: object
 *          required:
 *            - price
 *            - listing
 *            - avalibility
 *            - featuredProperties
 *            - type
 *          properties:
 *            price:
 *              type: number
 *            listing:
 *               type: number
 *            avalibility: 
 *               type: number
 *            featuredProperties:
 *               type: number
 *            type:
 *               type: string
 *    responses:
 *      '200':
 *        description: Membershipplan added successfully.
 */
router.post('/membershipplan',[
    check('price'),
    check("listing"),
    check("avalibility"),
    check("featuredProperties"),
    check("type")

],membershipplanController.postMembershipplan);

module.exports = router;
