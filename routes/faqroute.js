const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const faqController = require('../controllers/faqcontroller');


/**
 * @swagger
 * /api/faq:
 *  get:
 *    description: Get all the FAQ from DB
 *    tags: [Frequently Asked Question]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: FAQ fetched successfully.
 */
router.get('/faq', faqController.getFaq);


/**
 * @swagger
 * /api/faq:
 *  post:
 *    description: Use to add FAQ in DB
 *    tags: [Frequently Asked Question]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add Faq
 *        description: Add faq in DB.
 *        schema:
 *          type: object
 *          required:
 *            - question
 *            - answer
 *          properties:
 *            question:
 *              type: string
 *            answer:
 *               type: string
 *    responses:
 *      '200':
 *        description: FAQ added successfully.
 */
router.post('/faq',[
    check('question'),
    check("answer")
],faqController.postFaq);

module.exports = router;

