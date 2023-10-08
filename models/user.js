const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    "firstName": {
        "type": "string",
        "required": true,
        },

  "lastName": {
        "type": "string",
        "required": true,
        },


        "email": {
          "type": "string",
          "required": true,
          },


          "password": {
            "type": "string",
            "required": true,
            },

            "phoneNumber": {
              "type": "number",
              "required": true,
              },


              "roleId": {
                "type": "string",
                "required": true,
                },

                "roleName": {
                  "type": "string",
                  "required": true,
                  },
      

                  "socialId": {
                    "type": "number",
                    "required": true,
                    },

                    "deviceToken": {
                      "type": "string",
                      "required": true,
                      },
      
                      "socialType": {
                        "type": "string",
                        "enum":["facebook","linkedin","mobNo"],
                        "required": true,
                        },

                        "status": {
                          "type": "string",
                          "enum":["active","deactive"],
                          "required": true,
                          },

                          "deviceName": {
                            "type": "string",
                            "enum":["Iphone","Android","Web"],
                            "required": true,
                            },

                          
},
    { timestamps: true }
)

module.exports = mongoose.model("userReg",userSchema)