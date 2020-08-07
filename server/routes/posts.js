const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'this is my first post. Testing', 
            description: 'random data you shouldnot see'
        }
    });
});


module.exports = router;