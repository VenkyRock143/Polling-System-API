const mongodb = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
   try {
      await mongodb.connect(process.env.MONGODB_URI)
      console.log("MongoDB is connected successfully")
   } catch (error) {
      console.log("error in connecting mongodb", error);
      return res.status(500).send("Internal server error")
   }
}

module.exports = connectDB;