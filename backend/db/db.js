const mongoose = require("mongoose")
const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = () => {
    mongoose.connect(MONGODB_URI)
    .then(() => {console.log("MongoDB connected");})
    .catch((err) => {console.log("ERROR : ", err);})
}

module.exports = connectToDB;