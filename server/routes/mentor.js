const router = require('express').Router();
const User = require('../model/User');


router.post('/', async (req, res) => {
    if (req.body.empty) {
        const total = await User.countDocuments({}, function(err, count){
            console.log(err);
        });
        const users = await User.find({}, {}, {sort: {date: -1}, limit: 6}, function(err, res) {
            console.log(err);
        });
        return res.send({remaining: total-6, users: users})
    } else {
        return res.send("not empty")
    }
})

module.exports = router