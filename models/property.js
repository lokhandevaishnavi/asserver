const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    "title": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "details": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "userId": {
        "type": "number",
        "required": true,
        "unique":false
      },
      "type": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "progressStatus": {
        "type": "string",
        "enum":["ready to move","working"],
        "required": true,
        "unique":false
      },
      "price": {
        "type": "number",
        "required": true,
        "unique":false
      },
      "area": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "location": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "city": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "state": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "lat": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "long": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "propertyId": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "areaSize": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "sizePrefix": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "landArea": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "landAreaSize": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "bedrooms": {
        "type": "number",
        "required": true,
        "unique":false
      },
      "bathrooms": {
        "type": "number",
        "required": true,
        "unique":false
      },
      "garages": {
        "type": "number",
        "required": true,
        "unique":false
      },
      "garagesSize": {
        "type": "string",
        "required": true,
        "unique":false
      },
      "yearBuilt": {
        "type": "Date",
        "required": true,
        "unique":false
      },
     
      "amennities": {
        "type": "string",
        "required": true,
        "unique":false
      },
      
},
    { timestamps: true }
)

module.exports = mongoose.model("property",propertySchema)