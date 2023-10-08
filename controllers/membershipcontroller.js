const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const membershipModel = require("../models/membership")

exports.getMembership = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return  membershipModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        membershipModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then( memberships => {
            res.status(200).json({
                message: " membership Fetched",
                memberships:  memberships,           
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

exports.postMembership = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const userid = req.body.userid;
    const startdate = req.body.startdate;
    const enddate = req.body.enddate;
    
    
    const membership = new membershipModel({
        userid : userid ,
        startdate:startdate,
        enddate:enddate

    });
    membership.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "membership Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

}
