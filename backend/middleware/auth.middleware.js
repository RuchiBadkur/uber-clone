const userModel = require("../models/user.model")
const captainModel = require("../models/captain.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
// const cookies = require("cookie-parser")
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    // console.log(req.headers.authorization.split(" ")[1]);
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token})

    if(isBlacklisted){
        return res.status(401).json({message: "Unauthorized!"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded._id)
        const user = await userModel.findById(decoded._id)

        req.user = user;
        // console.log(user)
        return next();

    } catch (error) {
        return res.status(401).json({message: "Unathorized"})
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    // console.log(req.headers.authorization.split(" ")[1]);
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token})

    if(isBlacklisted){
        return res.status(401).json({message: "Unauthorized!"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded._id)
        const captain = await captainModel.findById(decoded._id)

        req.captain = captain;
        // console.log(captain)
        return next();

    } catch (error) {
        return res.status(401).json({message: "Unathorized"})
    }
}