const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
const userController = require("../controllers/user.controller")
const authMiddleware = require("../middleware/auth.middleware")


//register api
router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 characters long"),
    body('password').isLength({min: 6}).withMessage("Password must be at least 6 characters long")  
],
    userController.registerUser
)


//login api
router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long")
],
    userController.loginUser
)


//getUserProfile api
router.get("/profile", authMiddleware.authUser ,userController.getUserProfile)


//logout api
router.get("/logout", authMiddleware.authUser ,userController.logoutUser)



module.exports = router;


//express-validator---
// The body() comes from the user's input — it's part of the req.body (request body) that the user sends when submitting a form (like register/login).

// This data then goes through express-validator, which checks if the input is valid based on rules we defined (like valid email, password length, etc.).

// If everything is valid, the request goes to the controller function (e.g., registerUser).

// Inside the controller, the data is used to create a new user based on the userSchema (which defines how data should be structured in the database).

// Finally, the user is saved to MongoDB.

