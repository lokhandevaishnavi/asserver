const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const categoryController = require('../controllers/categorycontroller');





/**
 * @swagger
 * /api/category:
 *  get:
 *    description: Get all the category from DB
 *    tags: [Category]
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: categorys fetched successfully.
 */
router.get('/category', categoryController.getCategory);


/**
 * @swagger
 * /api/category:
 *  post:
 *    description: Use to add category in DB
 *    tags: [Category]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add category
 *        description: Add category in DB.
 *        schema:
 *          type: object
 *          required:
 *            - categoryName
 *            - status
 *          properties:
 *            categoryName:
 *              type: string
 *            status:
 *               type: string
 *    responses:
 *      '200':
 *        description: Category added successfully.
 */
router.post('/category',[
    check('categoryName'),
    check('status')
],categoryController.postCategory);


/**
 * @swagger
 * /api/category/{categoryId}:
 *  put:
 *    description: Used to update CategoryInfo in DB
 *    tags: [Category]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: categoryId        
 *      - in: body
 *        name: Update Category
 *        description: Update Category in DB.
 *        schema:
 *          type: object
 *          required:
 *            - categoryName
 *            - status
 *          properties:
 *            categoryName:
 *              type: string
 *            status:
 *              type: string
 *    responses:
 *      '200':
 *        description: Categoryinfo item updated successfully.
 */
router.put('/category/:categoryId', categoryController.updateCategory);


/**
 * @swagger
 * /api/category/{categoryId}:
 *  delete:
 *    description: Removes Category item from DB.
 *    tags: [Category]
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: categoryId
 *        description: Remove Categorydata Item from DB.
 *        schema:
 *          type: string
 *          required:
 *            - categoryId
 *          properties:
 *            categoryId:
 *              type: string
 *    responses:
 *      '200':
 *        description: CategoryData removed successfully.
 */

router.delete('/category/:categoryId', categoryController.deleteCategory);

module.exports = router;




