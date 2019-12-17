// CRUD

const {MongoClient,ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';


MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!');
    }

    const db = client.db(database);

    // db.collection('users').findOne({_id:new ObjectID('5df8ebfa6e56c641803d4b3a')},(error,user)=>{
    //     if(error){
    //         console.log('Unable to find')
    //     }
    //     console.log(user)
    // })

    db.collection('users').find({age:29}).toArray((error,users)=>{
        if(error){
            console.log('Unable to find')
        }
        console.log(users)
    })

    db.collection('users').find({age:29}).count((error,count)=>{
        if(error){
            console.log('Unable to count')
        }
        console.log(count)
    })
  
});