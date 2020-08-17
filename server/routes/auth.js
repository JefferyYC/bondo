const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation, mentorRegisterValidation, mentorLoginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Mentor = require('../model/Mentor');

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

//mentor_register
router.post('/mentor_register', async (req, res) => {

    //Validate the data before making a mentor
    const { error } = mentorRegisterValidation(req.body);

    console.log(error)
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    //Check if the mentor already exists
    const emailExists = await Mentor.findOne({email: req.body.email});
    if (emailExists) {
        return res.status(400).send("email already exists");
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const mentor = new Mentor({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        introduction: req.body.introduction,
        experience: req.body.experience,
        education: req.body.education
    });
    try{
        const savedMentor = await mentor.save();
        res.send({ mentor: mentor.id });
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
        return res.status(400).send("email or password is incorrect");
    }

    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) {
        return res.status(400).send("email or password is incorrect");
    }

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

//mentor_login
router.post('/mentor_login', async (req, res) => {
    const { error } = mentorLoginValidation(req.body);

    console.log(error)
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    
    //Checking if mentor exists
    const mentor = await Mentor.findOne({email: req.body.email});
    if (!mentor) {
        return res.status(400).send("email or password is incorrect");
    }

    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, mentor.password)
    if (!validPass) {
        return res.status(400).send("email or password is incorrect");
    }

    //Create and assign a token
    const token = jwt.sign({_id: mentor._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;