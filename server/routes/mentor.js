const router = require('express').Router();
const User = require('../model/User');
const { Query, Mongoose } = require('mongoose');
const ObjectId = require('mongodb').ObjectID;


router.post('/', async (req, res) => {
    const postPerPage = req.body.postPerPage
    const currentPage = req.body.currentPage
    var total = 0;
    var map = new Map();
    var keys = [];

    if (req.body.isEmpty) {
        if (req.body.count == 0) {
            total = await User.countDocuments({}, function(err, count){
                if (err) {
                    console.log(err)
                }
            });
        } else {
            total = req.body.count;
        }
        
        const users = await User.find({}, {}, {sort: {date: -1}, skip: postPerPage*(currentPage-1), limit: postPerPage}, function(err, res) {
            if (err) {
                console.log(err)
            }
        });
        return res.send({total: total, users: users})
    } else { 
        // TODO: incorporate queryString
/*
        User.find(
            // { $text: { $search: req.body.queryString } }, 
            { name: { $regex: req.body.queryString, "$options": "i" } },
            { score: { $meta: "textScore" } },
            {sort: {score: {$meta: "textScore"}}}, 
            function(err, result) {
                if (err) {
                    console.log(err)
                }
                console.log(result)
                return res.send({total:0, users: result})

            })
*/
        await User.aggregate()
        .facet({
            expertise: [{$unwind: "$expertise"},
            {$match: {expertise:{ $in: req.body.expertise}}},
            {$group: {_id: "$_id", count: {$sum: 1}}},
            {$project: {_id: 1, score: {$divide: ["$count", req.body.expertise.length]}}},
            {$sort: {score: -1}}],

            time: [{$unwind: "$time"},
            {$match: {time:{ $in: req.body.time}}},
            {$group: {_id: "$_id", count: {$sum: 1}}},
            {$project: {_id: 1, score: {$divide: ["$count", req.body.time.length]}}},
            {$sort: {score: -1}}],

            day: [{$unwind: "$day"},
            {$match: {day:{ $in: req.body.day}}},
            {$group: {_id: "$_id", count: {$sum: 1}}},
            {$project: {_id: 1, score: {$divide: ["$count", req.body.day.length]}}},
            {$sort: {score: -1}}]
            }).exec(function (err, matchUser) {
                if (err) {
                    console.log(err)
                    return
                }
                loop(matchUser[0].expertise, map, 0.4)
                loop(matchUser[0].day, map, 0.3)
                loop(matchUser[0].time, map, 0.3)
                keys = Array.from(map.keys()).sort(function(a, b) {
                    return map.get(b)-map.get(a);
                });
                // TODO: slicing

                for (var x of keys) {
                    var _id = ObjectId(x)
                }

                User.find({ "_id": { "$in": keys } }).exec(function(err, users) {
                    return res.send({total: keys.length, users: users})
                })

            });

        


        
        // SearcBar input
        // var query = await User.find({ name: { $regex: req.body.queryString, "$options": "i" }}, { score: { $meta: "textScore" } });

        // Filter
        // Test using names
        // if (req.body.expertise !== undefined) {
            // var x
            // for (x in req.body.names) {
            //     query.where('names')
            // }
            // console.log(typeof query)
            // User.find().elemMatch('expertise', function (elem) {
            //     console.log(elem)
            //     elem.in(req.body.expertise)
            // })
        //     User.find().where('expertise').in(req.body.expertse).exec(function (err, user) {
        //         if (err) {
        //             console.log(err)
        //             return
        //         }
        //         console.log(user)
        //         return res.send({total: 1, users: user})
        //     })
        // }

        // query.exec(function (err, user) {
        //     if (err) {
        //         console.log(err)
        //         return
        //     }
        //     console.log(user)
        //     return res.send({total: 1, users: user})
        // })
        
    }
})

function loop(ls, map, weight) {
    for (var x of ls) {
        var id = x._id.toString()
        if (map.has(id)) {
            map.set(id, x.score*weight+map.get(id))
        } else {
            map.set(id, x.score*weight)
        }
    }
}

module.exports = router     