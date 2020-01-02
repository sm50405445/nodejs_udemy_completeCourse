require('../src/db/mongoose')

const User = require('../src/models/user')

User.findByIdAndUpdate("5df8de6291a1820604fa49c6",{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})