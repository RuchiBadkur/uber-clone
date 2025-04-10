//app.js is only responsible for configuring your Express app (routes, middleware, etc).
const dotenv = require("dotenv")
dotenv.config();
const express = require("express")
const cors = require("cors")
const app = express();
const cookieParser = require("cookie-parser")
const connectToDB = require("./db/db")
const userRoutes = require("./routes/user.routes")


connectToDB();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("hello world");
})

app.use("/users", userRoutes)


module.exports = app;