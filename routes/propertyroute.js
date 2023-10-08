const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const propertyController = require('../controllers/propertycontroller');

/**
 * @swagger
 * /api/property:
 *  get:
 *    description: Get all the Property from DB
 *    tags: [Property]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: Property fetched successfully.
 */
router.get('/property', propertyController.getProperty);


/**
 * @swagger
 * /api/property:
 *  post:
 *    description: Use to add Property in DB
 *    tags: [Property]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add Property
 *        description: Add property in DB.
 *        schema:
 *          type: object
 *          required:
 *            -title
 *            -details
 *            -userId
 *            -type
 *            -progressStatus
 *            -price
 *            -area
 *            -location
 *            -city
 *            -state
 *            -lat
 *            -long
 *            -propertyId
 *            -areaSize
 *            -sizePrefix
 *            -landArea
 *            -landAreaSize
 *            -bedrooms
 *            -bathrooms
 *            -garages
 *            -garagesSize
 *            -yearBuilt
 *            -amennities
 *            -propertyMedia
 *            -attachment
 *          properties:
 *           title:
 *              type: string
 *           details:
 *              type: string
 *           userId:
 *              type: number
 *           type:
 *              type: string
 *           progressStatus:
 *              type: string
 *              enum: [ready to move,working]
 *           price:
 *              type: number
 *           area:
 *              type: string
 *           location:
 *              type: string
 *           city:
 *               type: string
 *           state:
 *               type: string
 *           lat:
 *               type: string
 *           long:
 *               type: string
 *           propertyId:
 *               type: string
 *           areaSize:
 *               type: string
 *           sizePrefix:
 *               type: string
 *           landArea:
 *               type: string
 *           landAreaSize:
 *               type: string
 *           bedrooms:
 *               type: number
 *           bathrooms:
 *               type: number  
 *           garages:
 *               type: number 
 *           garagesSize:
 *               type: string
 *           yearBuilt:
 *               type: Date
 *           amennities:
 *               type: string 
 *    responses:
 *      '200':
 *        description: user added successfully.
 */
router.post('/property',[
    check('title'),
    check('details'),
    check('userId'),
    check('type'),
    check('progressStatus'),
    check('price'),
    check('area'),
    check('location'),
    check('city'),
    check('state'),
    check('lat'),
    check('long'),
    check('propertyId'),
    check('areaSize'),
    check('sizePrefix'),
    check('landArea'),
    check('landAreaSize'),
    check('bedrooms'),
    check('bathrooms'),
    check('garages'),
    check('garagesSize'),
    check('yearBuilt'), 
    check('amennities')
    
    
],propertyController.postProperty);


/**
 * @swagger
 * /upload:
 *   post:
 *     description: Upload a file
 *     tags: [Property]
 *     produces:
 *        - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: Add file
 *         type: file
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *            -propertyMedia
 *            -attachment
 *         properties:
 *            propertyMedia:
 *              type: string
 *            attachment:
 *              type: string        
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *       400:
 *         description: Bad request
 */
router.post('/upload',[
    check('propertyMedia'),
    check('attachment')
],propertyController.postFileUpload);


/**
 * @swagger
 * /api/property/{propertyId}:
 *  put:
 *    description: Use to Update Property in DB
 *    tags: [Property]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: propertyId
 *      - in: body
 *        name: Update Property
 *        description: Update property in DB.
 *        schema:
 *          type: object
 *          required:
 *            -title
 *            -details
 *            -userId
 *            -type
 *            -progressStatus
 *            -price
 *            -area
 *            -location
 *            -city
 *            -state
 *            -lat
 *            -long
 *            -propertyId
 *            -areaSize
 *            -sizePrefix
 *            -landArea
 *            -landAreaSize
 *            -bedrooms
 *            -bathrooms
 *            -garages
 *            -garagesSize
 *            -yearBuilt
 *            -amennities
 *          properties:
 *           title:
 *              type: string
 *           details:
 *              type: string
 *           userId:
 *              type: number
 *           type:
 *              type: string
 *           progressStatus:
 *              type: string
 *           price:
 *              type: number
 *           area:
 *              type: string
 *           location:
 *              type: string
 *           city:
 *               type: string
 *           state:
 *               type: string
 *           lat:
 *               type: string
 *           long:
 *               type: string
 *           propertyId:
 *               type: string
 *           areaSize:
 *               type: number
 *           sizePrefix:
 *               type: number
 *           landArea:
 *               type: number
 *           landAreaSize:
 *               type: number
 *           bedrooms:
 *               type: number
 *           bathrooms:
 *               type: number  
 *           garages:
 *               type: number 
 *           garagesSize:
 *               type: number
 *           yearBuilt:
 *               type: number
 *           amennities:
 *               type: string 
 *    responses:
 *      '200':
 *        description: user added successfully.
 */
router.put('/property/:propertyId', propertyController.updateProperty);

/**
 * @swagger
 * /api/property/{propertyId}:
 *  delete:
 *    description: Removes Property item from DB.
 *    tags: [Property]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: propertyId
 *        description: Remove Propertydata Item from DB.
 *        schema:
 *          type: string
 *          required:
 *            - propertyId
 *          properties:
 *            propertyId:
 *              type: string
 *    responses:
 *      '200':
 *        description: propertyData removed successfully.
 */

router.delete('/property/:propertyId', propertyController.deleteProperty);





module.exports = router;
