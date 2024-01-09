const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;


// const generatePasswordRoute = require('./routes/generatePassword');


// // routes
// app.use("/api/v1", generatePasswordRoute);







app.get('/', (req, res) => {
    res.send("Backend is running successfully");
})



app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`App is listening at ${PORT}`);
})