const router = require('express').Router();
const User = require('../model/User');


router.post('/', async (req, res) => {
    if (req.body.isEmpty) {
        const total = await User.countDocuments({}, function(err, count){
            if (err) {
                console.log(err)
            }
        });
        const postPerPage = req.body.postPerPage
        const currentPage = req.body.currentPage
        const users = await User.find({}, {}, {sort: {date: -1}, skip: postPerPage*(currentPage-1), limit: postPerPage}, function(err, res) {
            if (err) {
                console.log(err)
            }
        });
        return res.send({total: total, users: users})
    } else {    
        // const temp = await User.createIndex( { name: "text", email: "text" } )   
        const users = await User.find(
            { $text: { $search: req.body.queryString } },   
            { score: { $meta: "textScore" } }, function(err, res) {
                if (err) {
                    console.log(err)
                }
            }).sort( { score: { $meta: "textScore" } })
        return res.send({remaining: 100, users: users})
    } 
})

module.exports = router     