const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks',(req,res)=>{
    const task = new Task(req.body)

    task.save().then(()=>{
        res.send(task)
    }).catch((error)=>{
        res.send(error)
    })
})

router.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

router.get('/task/:id',(req,res)=>{
    const _id = req.params.id

    Task.findById(_id).then((task)=>{
        if(!task){
            res.status(404).send(task)
        }
        res.status(200).send(task)
    }).catch((err)=>{
        res.status(500).send(err)
    })

})

module.exports = router