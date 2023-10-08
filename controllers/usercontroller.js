const { validationResult } = require('express-validator');
const userModel = require("../models/user")
//const bcrypt = require('bcrypt');


exports.getUser = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    return userModel.find()
    .countDocuments()
    .then(count =>{
        console.log({ count })
        userModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then(users => {
            res.status(200).json({
                message: "User Fetched",
                users: users,           
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

exports.postUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    
    const firstName=req.body.firstName?req.body.firstName:'';
    const lastName=req.body.lastName?req.body.lastName:'';
    const email = req.body.email?req.body.email:'';
    const password = req.body.password?req.body.password:'';
    const phoneNumber=req.body.phoneNumber?req.body.phoneNumber:'';
    const roleId=req.body.roleId?req.body.roleId:'';
    const roleName=req.body.roleName?req.body.roleName:'';
    const socialId=req.body.socialId?req.body.socialId:'';
    const deviceToken=req.body.deviceToken?req.body.deviceToken:'';
    const socialType=req.body.socialType?req.body.socialType:'';
    const status=req.body.socialId?'active':'deactive';
    const deviceName=req.body.deviceName?req.body.deviceName:'';
    
    const user = new userModel({
        firstName : firstName,
        lastName : lastName,
        email : email,
        password:password,
        phoneNumber:phoneNumber,
        roleId : roleId,
        roleName : roleName,
        socialId : socialId,
        deviceToken : deviceToken,
        socialType : socialType,
        status : status,
        deviceName :  deviceName,
    });
    if (!email  || !phoneNumber) {
        return res.status(422).json({ error: "Please fill your details" });
        }
        try {
            const userExist = await userModel.findOne({ email: email }, { phoneNumber: phoneNumber });
            if (userExist)
            {
                 return res
              .status(422)
              .json({ error: "Email or PhoneNumber already exists" });
              
            }else{
                user.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: "User Added Successfully!",
                    })
                })
                .catch(err => {
                    console.log(err)
                })
                }
           } catch (err) {
            console.log(err);

            
      }

}


exports.postLogin = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }
    
    try {
            const user = await userModel.findOne({ email: req.body.email });
            if (!user) throw new Error('User not found');
           res.status(200).send({msg:'Logged in successfully', user:user});
          }
         
          catch (error) {
            res.status(401).send(error.message);
          }
    }
    

    
   


    