const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const roleController = require('../controllers/rolecontroller');


/**
 * @swagger
 * /api/role:
 *  get:
 *    description: Get all the role from DB
 *    tags: [Role]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: roles fetched successfully.
 */
router.get('/role', roleController.getRole);


/**
 * @swagger
 * /api/role:
 *  post:
 *    description: Use to add role in DB
 *    tags: [Role]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add role
 *        description: Add role in DB.
 *        schema:
 *          type: object
 *          required:
 *            - roleName
 *            - status
 *          properties:
 *            roleName:
 *              type: string
 *            status:
 *               type: string
 *               enum: [Active,Deactive,Pending]
 *    responses:
 *      '200':
 *        description: role added successfully.
 */
router.post('/role',[
    check('roleName'),
    check("status")
],roleController.postRole);

module.exports = router;

