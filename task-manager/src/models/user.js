const mongoose = require('mongoose')


const User = mongoose.model('User',{
    name:{
        type: String,
        trim:true
    },
    password:{
        type: String,
        required:true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("dont have to 'password' contained")
            }
        }
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalidated")
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive Number')
            }
        }
    }
})

module.exports = User
 

