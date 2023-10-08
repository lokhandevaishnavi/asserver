const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const multer = require("multer");
const propertyModel = require("../models/property");
const express = require("express");
const bodyParser = require("body-parser");


const app = express() 
app.use(bodyParser.json())

exports.getProperty = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return propertyModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        propertyModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(propertys => {
            res.status(200).json({
                message: "property Fetched",
                propertys: propertys,           
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

exports.postProperty = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const title = req.body.title;
    const details = req.body.details;
    const userId = req.body.userId;
    const type = req.body.type;
    const progressStatus = req.body.progressStatus;
    const price = req.body.price;
    const area = req.body.area;
    const location = req.body.location;
    const city = req.body.city;
    const state = req.body.state;
    const lat = req.body.lat;
    const long = req.body.long;
    const propertyId = req.body.propertyId;
    const areaSize = req.body.areaSize;
    const sizePrefix = req.body.sizePrefix;
    const landArea = req.body.landArea;
    const landAreaSize = req.body.landAreaSize;
    const bedrooms = req.body.bedrooms;
    const bathrooms=req.body.bathrooms;
    const garages = req.body.garages;
    const garagesSize = req.body.garagesSize;
    const yearBuilt = req.body.yearBuilt;
    const amennities = req.body.amennities;
   
          
    const property = new propertyModel({
        title : title,
        details: details,
        userId:userId,
        type:type,
        progressStatus:progressStatus,
        price:price,
        area:area,
        location:location,
        city:city,
        state:state,
        lat:lat,
        long:long,
        propertyId:propertyId,
        areaSize:areaSize,
        sizePrefix:sizePrefix,
        landArea:landArea,
        landAreaSize:landAreaSize,
        bedrooms:bedrooms,
        bathrooms:bathrooms,
        garages:garages,
        garagesSize:garagesSize,
        yearBuilt:yearBuilt,
        amennities:amennities,
       
        

    });
    property.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "property Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

}
exports.updateProperty = (req, res, next) => {
    propertyModel.findByIdAndUpdate(
       
        req.params.propertyId,
        
        req.body,
        
        { new: true },
        
    ).then(property => {
        if (!property) {
            const error = new Error("No property Found");
            error.statusCode = 404;
            throw error
        }
        res.status(200).json({
            message: "property Item updated succesfully",
            property: property
        })
    }).catch(err => {
        console.log(err)

        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })

}
exports.deleteProperty = (req, res, next) => {
    const propertyId = req.params.propertyId;

    propertyModel.findByIdAndRemove(propertyId, function (err) {
        if (err) return next(err);
        res.status(200).json({
            message: "property deleted succesfully",
        })
    })
}

// const upload = multer({
//     storage:multer.diskStorage({
//       destination:function(req,file,cb)   //cb:callback
//     {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".pdf")
//     }
//     })
//   }).single('user_file');
  
  

exports.postFileUpload = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const propertyMedia = req.body.propertyMedia?req.body.propertyMedia:'';
    const attachment = req.body.attachment?req.body.attachment:'';
    
    
    
    const property = new propertyModel({
        propertyMedia : propertyMedia,
        attachment : attachment,
        });
        property.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "property Added Successfully!",
            })
        })
        .catch(err => {
            console.log(err)
        })
    
    }