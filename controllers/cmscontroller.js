const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const cmsModel = require("../models/cms")

exports.getCms = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return cmsModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        cmsModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(cmss => {
            res.status(200).json({
                message: "cms Fetched",
                cmss: cmss,           
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

exports.postCms = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const pageName = req.body.pageName?req.body.pageName:'';
    const content = req.body.content?req.body.content:'';
    
    
    const cms = new cmsModel({
        pageName : pageName,
        content : content
    });
    cms.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Cms Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

}
