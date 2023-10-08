const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const niceplaceSchema = new Schema({
     "propertyId": {
        "type": "string",
        "required": true,
       },

       "userId": {
        "type": "string",
        "required": true,
       },

       "URL": {
        "type": "string",
        "required": true,
       },

       "status": {
        "type": "string",
        "required": true,
       },

},
    { timestamps: true }
)

module.exports = mongoose.model("niceplace",niceplaceSchema)