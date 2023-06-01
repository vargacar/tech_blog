const router = require('express').Router();
const {Post, User } = require('../models');


router.get('/', (req, res) => {
    Post.findAll({
        attributes:['id', 'title', 'content'],
        include:[
            {
                model: User, 
                attributes: ['username'],
                
            }
        ]
    }).then((dbPosts)=>{
        const posts= dbPosts.map((post)=>{
            return post.get({plain: true})
        })
        console.log(posts)
        res.render('homepage', { isLoggedIn: req.session.isLogedIn, posts })
    }).catch((error)=>{
        console.log(error)
        res.render('homepage', { isLoggedIn: req.session.isLogedIn, posts:[] })
    })



   
})

router.get('/login', (req, res) => {
    if (req.session.isLogedIn) {
        return res.redirect('/')
    }
    res.render('login')

})

router.get('/signup', (req, res) => {
    if (req.session.isLogedIn) {
        return res.redirect('/')
    }
    res.render('signup')
})

module.exports = router;