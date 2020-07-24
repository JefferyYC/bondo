const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {

    //Validate the data before making a user
    const { error } = registerValidation(req.body);

    console.log(error)
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    //Check if the user already exists
    const emailExists = await User.findOne({email: req.body.email});
    if (emailExists) {
        return res.status(400).send("email already exists");
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });
    try{
        const savedUser = await user.save();
        res.send({ user: user.id });
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);

    console.log(error)
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    //Checking if user exists
    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).send("email is incorrect");
    }

    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) {
        return res.status(400).send("password is incorrect");
    }

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;