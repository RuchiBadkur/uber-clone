const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 characters"]
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must be at least 3 characters"]
        },
    },
    email: {
            type: String,
            required: true,
            unique: true,
            minlength: [5, "Email must be at least 5 characters"]
    },
    password: {
            type: String,
            required: true,
            select: false
            //jwt authentication
    },
    socketId: {
            type: String,
            //livetracking, to share the location
    }
    
})

//on login--
//In Mongoose, schema.methods lets you define custom functions for the documents (i.e., for each user, post, etc).
userSchema.methods.generateAuthToken = () => {
    //jwt.sign()
    //This function is used to create/sign a new token.
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    //{ _id: this._id } This is the payload — the data we want to include in the token.
    //this._id → refers to the current user’s unique ID.
    //process.env.JWT_SECRET → is the secret key used to sign the token securely.
    return token;
}
//jwt.verify() → Check the token (during protected routes)


//on login--
// ✅ Here's what bcrypt does:
// 👉 Behind the scenes:
// It takes your plain password (hello123)
// It uses the salt and hash algorithm from the saved hash
// It hashes your input the same way it was originally hashed
// Then it compares both results
// Returns true if they match, false if not
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

//on signup--
//hash password before storing
userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;