const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const wishlistModel = require("../models/wishlist")

exports.getWishlist = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return wishlistModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        .find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(wishlists => {
            res.status(200).json({
                message: "wishlist Fetched",
                wishlists: wishlists,           
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

exports.postWishlist = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const userId = req.body.userId?req.body.userId:'';
    const propertId = req.body.propertId?req.body.propertId:'';
    
    
    const wishlist = new wishlistModel({
        userId : userId,
        propertId : propertId
    });
    wishlist.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Wishlist Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

}