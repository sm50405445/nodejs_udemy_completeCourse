const doWorkPromises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject('Things went wrong')
        resolve([2,3,4])
    },2000)
})

doWorkPromises.then((result)=>{
    console.log('Success',result)
}).catch((error)=>{
    console.log('error',error)
})