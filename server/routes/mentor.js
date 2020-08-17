const router = require('express').Router();
const User = require('../model/User');


router.post('/', async (req, res) => {
    const postPerPage = req.body.postPerPage
    const currentPage = req.body.currentPage
    if (req.body.isEmpty) {
        const total = await User.countDocuments({}, function(err, count){
            if (err) {
                console.log(err)
            }
        });
        const users = await User.find({}, {}, {sort: {date: -1}, skip: postPerPage*(currentPage-1), limit: postPerPage}, function(err, res) {
            if (err) {
                console.log(err)
            }
        });
        return res.send({total: total, users: users})
    } else {    
        const total = await User.countDocuments({$text: { $search: req.body.queryString }}, function(err, count){
            if (err) {
                console.log(err)
            }
        });
        const users = await User.find(
            // { $text: { $search: req.body.queryString } }, 
            { name: { $regex: req.body.queryString, "$options": "i" } },
            // { email: { $regex: req.body.queryString, "$options": "i" } },
            // { score: { $meta: "textScore" } }, {skip: postPerPage*(currentPage-1), limit: postPerPage}, 
            function(err, res) {
                if (err) {
                    console.log(err)
                }
            }
            )
            // .sort( { score: { $meta: "textScore" } })
            
        console.log(users)
        return res.send({total: total, users: users})
    } 
})

module.exports = router     