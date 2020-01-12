const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users',(req,res)=>{
    const user = new User(req.body)

    user.save().then(()=>{
        res.send(user)
    }).catch((error)=>{
        res.send(error)
    })
})

router.get('/users',(req,res)=>{
   
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

router.get('/users/:id',(req,res)=>{
    const _id = req.params.id

    User.findById(_id).then((user)=>{
        if(!user){
            res.status(404).send()
        }
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

module.exports = router