const router = require('express').Router();
const {User}= require('../../models');



router.post('/login', (req, res)=>{
    const{username, password}= req.body

    User.findOne({where:{username}}). then((dbUser)=>{
     if(!dbUser){ 
        return res.status(400).json({message: "User Not Found"})

    }

    const validPassword = dbUser.checkPassword(password)
    if(!validPassword){
        return res.status(400).json({message: "Invalid Password"})
    }

    req.session.save(()=>{
        req.session.userId = dbUser.id 
        req.session.username = dbUser.username
        req.session.isLogedIn = true  

        res.json({message: "Login Success!"})
    })

    })
    .catch((error)=>{
        console.log(error)
        res.status (500).json({message: "Internal Error"})
    })
})

module.exports = router;
