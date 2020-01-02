const add = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },300)
    })
}

// add(2,3).then((sum)=>{
//     console.log(sum)
// }).catch((err)=>{
//     console.log(err)
// })

add(1,1).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
}).catch((err)=>{
    console.log(err)
})