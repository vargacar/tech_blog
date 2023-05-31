const router = require('express').Router();

router.get('/',(req, res)=>{
 res.render('homepage')   
})

router.get('/login',(req, res)=>{
    if (req.session.isLogedIn) {
        return res.redirect('/')
    }
    res.render('login')
    
})

router.get('/signup',(req, res)=>{
    if (req.session.isLogedIn) {
        return res.redirect('/')
    }
    res.render('signup')
})

module.exports = router;