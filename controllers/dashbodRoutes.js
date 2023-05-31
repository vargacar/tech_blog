const router = require('express').Router();
const { User } = require('../models');


router.get('/dashboard', (req, res) => {
    const userId = req.session.userId
    User.findOne({
        where: { id: userId },
        attributes: { exclude: ['password'] }
    }).then((user) => {
        res.render('dashboard', { user, isLoggedIn: true })
    })

})


module.exports = router;