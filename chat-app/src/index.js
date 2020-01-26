const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const {generateMessage,generateLocationMessage} = require('./utils/messages')
const {addUser,getUser,getUsersInRoom,removeUser} = require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')


app.use(express.static(publicDirectoryPath))

// let count = 0

io.on('connection',(socket)=>{
    
    socket.on('join',(options,callback)=>{

        const{error,user} = addUser({id:socket.id,...options})

        if(error){
            return callback(error)
        }

        socket.join(user.room)
        console.log('New Websocket Connection')
        
        socket.emit('message',generateMessage('Welcome!'))
        //broadcast : 현재 들어온 인원을 제외한 사람에게 보냄
        socket.broadcast.to(user.room).emit('message',generateMessage(`${user.username} has joined!`))
        io.to(user.room).emit('roomData',{
            room:user.room,
            users:getUsersInRoom(user.room)
        })
    })

    

    socket.on('sendMessage',(message,callback)=>{
        console.log(message)
        const filter = new Filter()

        if(filter.isProfane(message)){
            return callback('Profanity is not allowed!')
        }

        const user = getUser(socket.id)
        console.log(user)
        if(user){
            io.to(user.room).emit('message',generateMessage(user.username,message))
            callback('Delivered!')
        }
    })

    socket.on('disconnect',()=>{
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message',generateMessage(`A ${user.username} has left`))
            io.to(user.room).emit('roomData',{
                room:user.room,
                users:getUsersInRoom(user.room)
            })
        }
        
    })

    socket.on('sendLocation',(message,callback)=>{
        const user = getUser(socket.id)
        console.log(message)
        console.log(user)
        if(user){
            io.to(user.room).emit('locationMessage',generateLocationMessage(user.username,`https://google.com/maps?q=${message.latitude},${message.longitude}`))
            callback()
        }
    })

    

})

server.listen(port,()=>{
    console.log(`Server is up on port ${port}!`)
})
