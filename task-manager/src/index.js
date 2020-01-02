const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users',(req,res)=>{
    const user = new User(req.body)

    user.save().then(()=>{
        res.send(user)
    }).catch((error)=>{
        res.send(error)
    })
})

app.get('/users',(req,res)=>{
   
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

app.get('/users/:id',(req,res)=>{
    const _id = req.params.id

    User.findById(_id).then((user)=>{
        if(!user){
            res.status(404).send()
        }
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

app.post('/tasks',(req,res)=>{
    const task = new Task(req.body)

    task.save().then(()=>{
        res.send(task)
    }).catch((error)=>{
        res.send(error)
    })
})

app.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

app.get('/task/:id',(req,res)=>{
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

app.listen(port,()=>{
    console.log("server is up on port ",port)
})