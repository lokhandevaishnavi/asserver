const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cmsSchema = new Schema({
    "pageName": {
        "type": "string",
        "required": true,
        },

  "content": {
        "type": "string",
        "required": true,
         },
      },
    { timestamps: true }
)

module.exports = mongoose.model("cms",cmsSchema)