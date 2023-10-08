const mongoose = require ("mongoose");
const { validationResult } = require('express-validator');
const faqModel = require("../models/faq")

exports.getFaq = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return faqModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
     faqModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(faqs => {
            res.status(200).json({
                message: "faq Fetched",
                faqs: faqs,           
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

exports.postFaq = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const question = req.body.question?req.body.question:'';
    const answer = req.body.answer?req.body.answer:'';
    
    
    const faq = new faqModel({
        question : question,
        answer : answer
    });
    faq.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Faq Added Successfully!",
        })
    })
    .catch(err => {
        console.log(err)
    })

}
