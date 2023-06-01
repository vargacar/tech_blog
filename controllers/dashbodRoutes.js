const router = require('express').Router();
const { User, Post } = require('../models');
const auth = require('../utils/auth');

router.get('/dashboard', auth, (req, res) => {
    const userId = req.session.userId
    User.findOne({
        where: { id: userId },
        attributes: { exclude: ['password'] }
    }).then((user) => {
        res.render('dashboard', { user, isLoggedIn: true })
    })

})

router.post('/posts', auth, (req, res) =>{
    const {title, content} = req.body
    Post.create({
        title, content, 
        user_id: req.session.userId
    }).then((savedPost)=>{
     res.redirect('/dashboard')
    }).catch((error)=>{
        console.log(error)
        res.render('dashboard', { user:req.session, isLoggedIn: true, error:'Internal error, try again!' })
    })
})


module.exports = router;