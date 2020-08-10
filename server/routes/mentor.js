const router = require('express').Router();
const User = require('../model/User');
const { DocumentQuery } = require('mongoose');


router.post('/', async (req, res) => {
    if (req.body.isEmpty) {
        const total = await User.countDocuments({}, function(err, count){
            console.log(err);
        });
        const users = await User.find({}, {}, {sort: {date: -1}, limit: 6}, function(err, res) {
            console.log(err);
        });
        return res.send({remaining: total-6, users: users})
    } else {
        //can transfer data between components, haven't implemented filter logic yet 
        const name = req.body.names
        const users = await User.find({name: /lyk/i}, {}, {sort: {date: -1}, limit: 6}, function(err, res) {
                console.log(err)
            })
        return res.send({remaining: 0, users: users})
    }
})

module.exports = router