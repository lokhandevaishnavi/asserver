const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const ratingModel = require("../models/rating")

exports.getRating = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return ratingModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        ratingModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(ratings => {
            res.status(200).json({
                message: "rating Fetched",
                ratings: ratings,           
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

exports.postRating = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const userId = req.body.userId?req.body.userId:'';
    const propertyId = req.body.propertyId?req.body.propertyId:'';
    const ratingStar = req.body.ratingStar?req.body.ratingStar:'';
    const review = req.body.review?req.body.review:'';
    
    
    const rating = new ratingModel({
        userId : userId,
        propertyId : propertyId,
        ratingStar : ratingStar,
        review : review
        

    });
    rating.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Rating Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

}
