const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const expressFileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
const mongoose=require('mongoose')

// routes
const { user_route } = require('./routes/user')
const { quran_route } = require('./routes/quran')

// cloudinary configuration
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

const app = express()

// server configuration
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressFileUpload({ useTempFiles: true }));

// database configuration
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch((error) => {
    console.log(`Could not connect to database`, error);
  });

// routes called 
app.use("/api",user_route)
app.use("/api",quran_route)


//server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at ${process.env.PORT}`)
})