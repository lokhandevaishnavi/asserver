const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    "userId": {
        "type": "string",
        "required": true,
        },

     "propertyId": {
        "type": "string",
        "required": true,
        
      },
      
      
},
    { timestamps: true }
)

module.exports = mongoose.model("wishlist",wishlistSchema)