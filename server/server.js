const path = require('path')
const express = require('express')
const session = require('express-session')
// const dotenv = require('dotenv')
// dotenv.config();
require('dotenv').config();
const app = express();
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const db = require('./config/db')
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const publicationRoutes = require("./routes/publicationRoutes");
const userInfoRoutes = require("./routes/userInfoRouters");
const reviewRoutes = require("./routes/reviewRoutes");
const eventRoutes = require("./routes/eventRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const sendEmailRouts = require("./routes/sendEmailRoutes");
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose 
 .connect(db.mongoURI , db.options)
 .then(() => {
    console.log('connected to MongoDB');
 })
 .catch((error) => {
    console.error('error connecting to MongoDB' , error)
 })

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));

// Cookie parser middleware
app.use(cookieParser());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/publications", publicationRoutes);
app.use("/api/userInfo", userInfoRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/events", eventRoutes);
// app.use("/uploads", uploadRoutes);
app.use("/api/sendEmail", sendEmailRouts);

app.listen(port, () => {
   console.log(`server is running on port`, port);
   // let arr = new String('asd, qwe')
   // console.log(arr.toArray());
})