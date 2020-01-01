const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

// const Task = mongoose.model('Task',{
//     description:{
//         type:String,
//         required: true,
//         trim: true
//     },
//     completed:{
//         type:Boolean,
//         default: false
//     }
// })

// const me = new Task({
//     description:'To do list',
//     completed:true
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((err)=>{
//     console.log(err)
// })

// const me = new User({
//     name: '     LSM             ',
//     email: 'sd50712321@NAVER.com',
//     password: 'password1238a21'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error : ",error)
// })