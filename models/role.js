const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    "roleName": {
        "type": "string",
        "required": true,
        },

  "status": {
        "type": "string",
        "enum": ["Active","Deactive","Pending"],
        "required": true,
        
      },
      
      
},
    { timestamps: true }
)

module.exports = mongoose.model("role",roleSchema)