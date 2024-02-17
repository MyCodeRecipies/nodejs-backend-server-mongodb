const express = require('express');
const app = express();

// dov env config
require('dotenv').config();

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hiryde:HiRyde@hirydecluster0.0groqbi.mongodb.net/hiryde');

mongoose.connection.once('open', () => {
    console.log('Mongoose Connected');
});

mongoose.connection.on('error', (error) => {
    console.log('Mongoose Connection Failed' + error);
});

//routes
const userRoute = require('./route/UserRoute');
app.use('/api', userRoute);

//server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port: ${process.env.PORT}`);
});