const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require('./routes/userroute');
const categoryRoute = require('./routes/categoryroute');
const roleRoute = require('./routes/roleroute');
const propertyRoute = require('./routes/propertyroute');
const ratingRoute = require('./routes/ratingroute');
const cmsRoute = require('./routes/cmsroute');
const membershipplanRoute = require('./routes/membershipplanroute');
const wishlistRoute = require('./routes/wishlistroute');
const niceplaceRoute = require('./routes/niceplaceroute');
const faqRoute = require('./routes/faqroute');
const membershipRoute = require('./routes/membershiproute');


//const membershipplanRoute = require('./routes/membershipplanroute')



// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerOptions = require('./swagger/swagger.json');
// const membershipplan = require("./models/membershipplan");
// const membership = require("./models/membership");
const swaggerDocument = swaggerJsDoc(SwaggerOptions);

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
 }) 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', userRoute);
app.use('/api', categoryRoute);
app.use('/api', roleRoute);
app.use('/api', propertyRoute);
app.use('/api', ratingRoute);
app.use('/api', cmsRoute);
app.use('/api', membershipplanRoute);
app.use('/api', wishlistRoute);
app.use('/api', niceplaceRoute);
app.use('/api', faqRoute);
app.use('/api', membershipRoute)





app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;

    res.status(status).json({message:message});
})
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
 console.log('aaa')
    app.listen(PORT,()=>console.log(`server port: ${PORT}`));
}).catch((error)=>console.log(`${error}did not connect`))
