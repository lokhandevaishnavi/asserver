const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membershipplanSchema = new Schema({
    "price": {
        "type": "number",
        "required": true,
       },

       "listing": {
        "type": "number",
        "required": true,
       },

       "avalibility": {
        "type": "number",
        "required": true,
       },

       "featuredProperties": {
        "type": "number",
        "required": true,
       },

       "type": {
        "type": "string",
        "required": true,
      },

},
    { timestamps: true }
)

module.exports = mongoose.model("membershipplan",membershipplanSchema)