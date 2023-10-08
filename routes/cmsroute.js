const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const cmsController = require('../controllers/cmscontroller');


/**
 * @swagger
 * /api/cms:
 *  get:
 *    description: Get all the CMS from DB
 *    tags: [Content Managment System]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: CMS fetched successfully.
 */
router.get('/cms', cmsController.getCms);


/**
 * @swagger
 * /api/cms:
 *  post:
 *    description: Use to add role in DB
 *    tags: [Content Managment System]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add CMS
 *        description: Add CMS in DB.
 *        schema:
 *          type: object
 *          required:
 *            - pageName
 *            - content
 *          properties:
 *            pageName:
 *              type: string
 *            content:
 *               type: string
 *    responses:
 *      '200':
 *        description: CMS added successfully.
 */
router.post('/cms',[
    check('pageName'),
    check("content")
],cmsController.postCms);

module.exports = router;