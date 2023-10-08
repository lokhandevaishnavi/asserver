const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const membershipplanModel = require("../models/rating")

exports.getMembershipplan = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return membershipplanModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        membershipplanModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(membershipplans => {
            res.status(200).json({
                message: "MembershipPlan Fetched",
                membershipplans: membershipplans,           
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

exports.postMembershipplan = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const price = req.body.price?req.body.price:'';
    const listing = req.body.listing?req.body.listing:'';
    const avalibility = req.body.avalibility?req.body.avalibility:'';
    const featuredProperties = req.body.featuredProperties?req.body.featuredProperties:'';
    const type = req.body.type?req.body.type:'';
    
    const membershipplan = new membershipplanModel({
        price : price,
        listing : listing,
        avalibility : avalibility,
        featuredProperties : featuredProperties,
        type : type
        

    });
    membershipplan.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "MembershipPlan Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

}