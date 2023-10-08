const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const roleModel = require("../models/role")

exports.getRole = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return roleModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        roleModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(roles => {
            res.status(200).json({
                message: "role Fetched",
                roles: roles,           
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

exports.postRole = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const roleName = req.body.roleName?req.body.roleName:'';
    const status = req.body.status?req.body.status:'';
    
    
    const role = new roleModel({
        roleName : roleName,
        status : status
    });
    role.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Role Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })
  
}
