const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/usercontroller');


/**
 * @swagger
 * /api/user:
 *  get:
 *    description: Get all the User from DB
 *    tags: [User Registration and Login]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: users fetched successfully.
 */
router.get('/user', userController.getUser);

/**
 * @swagger
 * /api/user:
 *  post:
 *    description: Use to add user in DB
 *    tags: [User Registration and Login]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add user
 *        description: Add user in DB.
 *        schema:
 *          type: object
 *          required:
 *            - firstName
 *            - lastName
 *            - email
 *            - password
 *            - phoneNumber
 *            - roleId
 *            - roleName
 *            - socialId
 *            - deviceToken
 *            - socialType
 *            - status
 *            - deviceName
 *          properties:
 *            firstName:
 *              type: string
 *            lastName:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            phoneNumber:
 *               type: number
 *            roleId:
 *               type: string
 *            roleName:
 *               type: string
 *            socialId:
 *               type: number
 *            deviceToken:
 *               type: string
 *            socialType:
 *               type: string
 *               enum: [facebook,linkedIn,mobNo]
 *            status:
 *              type: string
 *            deviceName:
 *              type: string
 *              enum: [Iphone,Android,Web]
 *    responses:
 *      '200':
 *        description: User added successfully.
 */
router.post('/user',[
   
    check('firstName'),
    check('lastName'),
    check('email'),
    check('password'),
    check('phoneNumber'),
    check('roleId'),
    check('roleName'),
    check('socialId'),
    check('deviceToken'),
    check('socialType'),
    check('status'),
    check('deviceName')
    ],userController.postUser);


    /**
 * @swagger
 * /api/login:
 *  post:
 *    description: Use to add login in DB
 *    tags: [User Registration and Login]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add login
 *        description: Add Data in DB.
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: login successfully.
 */
router.post('/login',[
    check('email'),
    check('password')
],userController.postLogin);





module.exports = router;











