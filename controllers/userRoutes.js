const router = require('express').Router();
const {User}= require('../models');


router.post('/signup', (req, res)=>{
  
    const{username, password}= req.body

    User.create({username, password}). then((savedUser)=>{
        req.session.save(()=>{
            req.session.userId = savedUser.id 
            req.session.username = savedUser.username
            req.session.isLogedIn = true  

            res.redirect('/dashboard')
        })
    })
    .catch((error)=>{
        console.log(error)
    })
})

router.post('/login', (req, res)=>{
    const{username, password}= req.body

    User.create({username, password}). then((savedUser)=>{
        req.session.save(()=>{
            req.session.userId = savedUser.id 
            req.session.username = savedUser.username
            req.session.isLogedIn = true  

            res.redirect('/dashboard')
        })
    })
    .catch((error)=>{
        console.log(error)
    })
})

module.exports = router;

