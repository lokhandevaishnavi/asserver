const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const wishlistController = require('../controllers/wishlistcontroller');


/**
 * @swagger
 * /api/wishlist:
 *  get:
 *    description: Get all the wishlist from DB
 *    tags: [Wishlist]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: Wishlist fetched successfully.
 */
router.get('/wishlist', wishlistController.getWishlist);


/**
 * @swagger
 * /api/wishlist:
 *  post:
 *    description: Use to add Wishlist in DB
 *    tags: [Wishlist]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add Wishlist
 *        description: Add wishlist in DB.
 *        schema:
 *          type: object
 *          required:
 *            - userId
 *            - propertyId
 *          properties:
 *            userId:
 *              type: string
 *            propertyId:
 *               type: string
 *    responses:
 *      '200':
 *        description: Wishlist added successfully.
 */
router.post('/wishlist',[
    check('userId'),
    check("propertyId")
],wishlistController.postWishlist);

module.exports = router;

