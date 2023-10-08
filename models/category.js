const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    "categoryName": {
        "type": "string",
        "required": true
      },
      "status": {
        "type": "string",
        "required": true
      },
     
},
    { timestamps: true }
)

module.exports = mongoose.model("Category",categorySchema)