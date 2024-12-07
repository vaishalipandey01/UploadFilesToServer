// app create 
const express = require("express");
const app = express();

// find port 
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// add middleware 
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

//db se conn
const db = require("./config/database");
db.connect();

//cloud se connect krna h 
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount krna h 
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload',Upload );

//activate server
app.listen(PORT,() => {
    console.log(`app is running at ${PORT}`);
})