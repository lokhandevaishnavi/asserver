const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faqSchema = new Schema({
    "question": {
        "type": "string",
        "required": true,
        },

  "answer": {
        "type": "string",
        "required": true,
        
      },
      
      
},
    { timestamps: true }
)

module.exports = mongoose.model("faq",faqSchema)