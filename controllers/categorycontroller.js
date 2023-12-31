const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const categoryModel = require("../models/category")

exports.getCategory = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 10;
    return categoryModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        categoryModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(categorys => {
            res.status(200).json({
                message: "Category Fetched",
                categorys: categorys,           
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err)
        });
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    })
};

exports.postCategory = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }

    const categoryName = req.body.categoryName;
    const status = req.body.status;
    
    const category = new categoryModel({
        
        categoryName: categoryName,
        status: status
        
    });
    category.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Category Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

},

exports.updateCategory = (req, res, next) => {
    categoryModel.findByIdAndUpdate(
      
        req.params.categoryId,
        
        req.body,
        
        { new: true },
        

    ).then(category => {
        if (!category) {
            const error = new Error("No Category Found");
            error.statusCode = 404;
            throw error
        }
        res.status(200).json({
            message: "Category Item updated succesfully",
            category: category
        })
    }).catch(err => {
        console.log(err)
        const error = new Error("No Category Found");
        if (!err.statusCode) {
            err.message = "No Category Found"
            err.statusCode = 404
        }
        next(err)
    })

},

exports.deleteCategory = (req, res, next) => {
    const categoryId = req.params.categoryId;

    categoryModel.findByIdAndRemove(categoryId, function (err) {
        if (err) return next(err);
        res.status(200).json({
            message: "Category deleted succesfully",
        })
    })


}

