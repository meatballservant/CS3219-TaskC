const mongoose = require("mongoose");

const env = require('./env')

exports.connect = () => { 
mongoose
    .connect(env.url, {
    useNewUrlParser: true,
    })
    .then(() => {
    console.log("Successfully connected to database");
    })
    .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
    });
};