const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membershipSchema = new Schema({
    
      "userid": {
        "type": "string",
        "required": true
      },


      "startdate": {
        "type": "Date",
        "required": true
      },
      
      "enddate": {
        "type": "Date",
        "required": true
      },
      
      
},
    { timestamps: true }
)

module.exports = mongoose.model("membership",membershipSchema)


