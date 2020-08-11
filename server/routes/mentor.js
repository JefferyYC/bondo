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
        // const temp = await User.createIndex( { name: "text", email: "text" } )   
        const users = await User.find(
            { $text: { $search: req.body.queryString } },   
            { score: { $meta: "textScore" } }, function(err, res) {
                console.log(err)
            }).sort( { score: { $meta: "textScore" } })
        return res.send({remaining: 100, users: users})
    } 
})

module.exports = router     