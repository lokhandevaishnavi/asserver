const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    "userId": {
        "type": "string",
        "required": true,
       },

       "propertyId": {
        "type": "string",
        "required": true,
       },

       "ratingStar": {
        "type": "number",
        "required": true,
       },

       "review": {
        "type": "string",
        "required": true,
       },

},
    { timestamps: true }
)

module.exports = mongoose.model("rating",ratingSchema)