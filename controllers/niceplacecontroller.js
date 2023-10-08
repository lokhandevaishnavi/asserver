const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const niceplaceModel = require("../models/niceplace")

exports.getNiceplace = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return niceplaceModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        niceplaceModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(niceplaces => {
            res.status(200).json({
                message: "rating Fetched",
                niceplaces: niceplaces,           
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

exports.postNiceplace = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const propertyId = req.body.propertyId?req.body.propertyId:'';
    const userId = req.body.userId?req.body.userId:'';
    const URL = req.body.URL?req.body.URL:'';
    const status = req.body.status?req.body.status:'';
    
    
    const niceplace = new niceplaceModel({
        propertyId : propertyId,
        userId : userId,
        URL : URL,
        status : status
        

    });
    niceplace.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Niceplace Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

}