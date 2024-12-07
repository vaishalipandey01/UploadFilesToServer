//mongooose inst
const mongoose = require("mongoose");
//load the config from env 
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log('DB connection successful');
      }).catch((err) => {
        console.error('DB connection error:', err);
      });
      
}