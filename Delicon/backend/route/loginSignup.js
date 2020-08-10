const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../model/user')
router.post('/login', async (req, res) => {
    let { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
        valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            res.status(400).send("Password not matched");
        } else {
            console.log("user loged in");
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
            res.header("auth-token", token).send({ token, user });
        }
    } else {
        res.status(401).send("Email not found");
    }
})
router.post('/register', async (req, res) => {
    let { name, email, password } = req.body;
    //Checking if User Already Exists
    let found = await userModel.findOne({ email });
    if (found) return res.send("User already Exists");
    //Hashing Password
    let salt = await bcrypt.genSalt(5);
    const hashed = await bcrypt.hash(password, salt);
    password = hashed;
    //Creating a User
    let user = await new userModel({ name, email, password });
    try {
        let userSaved = await user.save();
        res.send(userSaved);
    } catch (error) {
        console.log(error);
    }
})
module.exports = router